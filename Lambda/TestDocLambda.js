console.log("Loading function");

const doc = require("dynamodb-doc");
const AWS = require("aws-sdk"),
  uuid = require("uuid"),
  docClient = new AWS.DynamoDB.DocumentClient();
const dynamo = new doc.DynamoDB();

/**
 * Demonstrates a simple HTTP endpoint using API Gateway. You have full
 * access to the request and response payload, including headers and
 * status code.
 *
 * To scan a DynamoDB table, make a GET request with the TableName as a
 * query string parameter. To put, update, or delete an item, make a POST,
 * PUT, or DELETE request respectively, passing in the payload to the
 * DynamoDB API as a JSON body.
 */
exports.handler = (event, context, callback) => {
  console.log("Received event:", JSON.stringify(event, null, 2));
  const { body, httpMethod, queryStringParameters, path } = event;
  let parsedBody = handleBody(body);
  handleRouting(path, parsedBody, httpMethod, queryStringParameters, callback);
};

//TEST CYCLE
const ensureTestCycleExist = async testCycleId => {
  let testCycletype = "TestCycle";
  const res = await searchResourceById(testCycleId, testCycletype);
  if (res.Count === 0) {
    console.log(`No record found for test cycle: ${testCycleId}. Creating test cycle`);
    return await createTestCycle(testCycleId);
  }
  else {
    console.log("Test Cycle exists. Continue execution");
    return res;
  }
};
const testcycleRouting = (httpMethod, parsedBody, callback) => {
  switch (httpMethod) {
    case "POST":
      let id = parsedBody.Item.Id;
      let type = "TestCycle";
      let startedOn = new Date().toISOString();
      ensureTestCycleExist(id).then(res => done(null, res, callback));
      break;

    default:
      done(new Error(`Unsupported method "${parsedBody}"`), null, callback);
  }
};
const createTestCycle = id => {
  let params = {
    TableName: "TestDoc",
    Item: {
      Id: id,
      Type: "TestCycle",
      StartedOn: new Date().toISOString(),
      Status: "Running"
    }
  };
  return dbClient(params, "POST");
};
const ensureTestCaseNotInTestCycleAlready = async (testCaseId, testCycleId) => {
  const res = await searchResourceById(testCycleId, "TestCycle");
  if (res.Items[0].TestCases) {
    let result = !res.Items[0].TestCases.some(x => x.Id === testCaseId);
    return result;
  }
  return true;
};
const addTestCaseToCycle = (testCycleId, testCase) => {
  var params = {
    TableName: "TestDoc",
    Key: {
      Id: testCycleId,
      Type: "TestCycle"
    },
    UpdateExpression:
      "set #testCases = list_append(if_not_exists(#testCases, :empty_list), :testCase)",
    ExpressionAttributeNames: {
      "#testCases": "TestCases"
    },
    ExpressionAttributeValues: {
      ":testCase": [testCase],
      ":empty_list": []
    }
  };
  return dbClient(params, "PUT");
};

const handleTestCaseToCycle = (testCase, testCycleId) => {
  ensureTestCaseNotInTestCycleAlready(testCase.Id, testCycleId).then(
    needToAdd => {
      if (needToAdd) {
        console.log(`Adding test case ${testCase.Id} to ${testCycleId}`);
        return addTestCaseToCycle(testCycleId, testCase);
      } else {
        console.log("Test case exists in test cycle");
        return searchResourceById(testCase.Id, 'TestCase');
      }
    }
  );
};

//TEST CASE
const testCaseRouting = (httpMethod, parsedBody, callback) => {
  switch (httpMethod) {
    case "POST":
      let testCaseId = parsedBody.Item.TestCaseId;
      let testCycleId = parsedBody.Item.TestCycleId;
      let testCaseType = "TestCase";
      ensureTestCycleExist(testCycleId).then(() => {
        searchResourceById(testCaseId, testCaseType).then(testCaseResp => {
          if (testCaseResp.Count === 0) {
            console.log(
              `No record found for test case: ${testCaseId}. Creating test case.`
            );
            createTestCase(testCaseId)
              //TODO: create a jama test
              .then(() => searchResourceById(testCaseId, testCaseType))
              .then(res => handleTestCaseToCycle(res.Items[0], testCycleId))
              .then(res => done(null, res, callback)
              );

          } else {
            console.log(`Test case ${testCaseId} exists. Continue execution.`);
            let res = handleTestCaseToCycle(testCaseResp.Items[0], testCycleId);
            done(null, res, callback);
          }
        });
      });
      break;
    default:
      done(new Error(`Unsupported method "${parsedBody}"`), null, callback);
  }
};

const createTestCase = id => {
  let params = {
    TableName: "TestDoc",
    Item: {
      Id: id,
      Type: "TestCase",
      CreatedOn: new Date().toISOString()
    }
  };
  return dbClient(params, "POST");
};

//Helper
const searchResourceById = (id, type) => {
  let params = {
    TableName: "TestDoc",
    KeyConditionExpression: "#id = :id and #type = :type",
    ExpressionAttributeNames: {
      "#id": "Id",
      "#type": "Type"
    },
    ExpressionAttributeValues: {
      ":id": id,
      ":type": type
    }
  };
  return dbClient(params, "GET");
};
const dbClient = async (params, httpMethod) => {
  switch (httpMethod) {
    case "DELETE":
      return dynamo
        .deleteItem(params, function (err, res) {
          return res;
        })
        .promise();
    case "GET":
      return await docClient.query(params).promise();
    case "POST":
      return await dynamo.putItem(params).promise();
    case "PUT":
      return await docClient.update(params).promise();

    default:
      return new Error(`Unsupported method "${params}"`);
  }
};
const handleBody = body => {
  if (typeof body === "string") {
    return JSON.parse(body);
  }
  return body;
};
const done = (err, res, handleCallback) => {
  handleCallback(null, {
    statusCode: err ? "400" : "200",
    body: err ? err.message : JSON.stringify(res),
    headers: {
      "Content-Type": "application/json"
    }
  });
};

const handleRouting = (path, parsedBody, httpMethod, querystring, callback) => {
  let resource = path.split("/")[path.split("/").length - 1].toLowerCase();
  switch (resource) {
    case "testcase":
      testCaseRouting(httpMethod, parsedBody, callback);
      break;
    case "testcycle":
      testcycleRouting(httpMethod, parsedBody, callback);
      break;
    default:
      done(new Error(`404 not found "${path}"`), null, callback);
      break;
  }
};
