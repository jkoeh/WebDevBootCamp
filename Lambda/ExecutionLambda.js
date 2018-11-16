"use strict";

const AWS = require("aws-sdk"),
  uuid = require("uuid"),
  documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = function(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  const name = event["body-json"].name;
    const httpMethod = event.context["http-method"];
  console.log("name: ", name);
  console.log("httpMethod: ", httpMethod);
  if (httpMethod === "POST") {
    handleCreate(name, callback);
  } else if (httpMethod === "PUT") {
    handleUpdate(name, callback);
//   } else if (httpMethod === "GET") {
//     handleRead(queryName).then(data => callback(null, data));
  } else {
    var error = new Error(`http-method: ${httpMethod} is not supported`);
    callback(error);
  }
};
function handleRead(name) {
  let params = {
    TableName: process.env.TABLE_NAME,
    FilterExpression: "#name = :name",
    ExpressionAttributeNames: {
      "#name": "Name"
    },
    ExpressionAttributeValues: {
      ":name": name
    }
  };
  return documentClient
    .scan(params, function(err, data) {
      let resp = handleScan(err, data);
      console.log(resp.Items[0]);
      return resp.Items[0];
    })
    .promise();
}
function handleUpdate(name, callback) {
  handleRead(name).then(execution => {
    console.log(execution);
    var params = {
      TableName: process.env.TABLE_NAME,
      Key: {
        Id: execution.Items[0].Id,
        StartTime: execution.Items[0].StartTime
      },
      UpdateExpression: "set #a = :x, #b = :y",
      ExpressionAttributeNames: { "#a": "ExecutionState", "#b": "CompletedOn" },
      ExpressionAttributeValues: {
        ":x": "Complete",
        ":y": new Date().toISOString()
      },
      ReturnValues: "UPDATED_NEW"
    };
    console.log(params);
    documentClient.update(params, function(err, data) {
      callback(err, data);
    });
  });
}

function handleCreate(name, callback) {
  let params = {
    Item: {
      //Simple, fast generation of RFC4122 UUIDS base on timestamp
      Id: uuid.v1(),
      Name: name,
      StartTime: new Date().toISOString(),
      ExecutionState: "Running"
    },
    TableName: process.env.TABLE_NAME
  };
  documentClient.put(params, function(err, data) {
    callback(err, data);
  });
}

function handleScan(err, data) {
  if (err) {
    console.error(
      "Unable to scan the table. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("Scan succeeded.");
    return data;
  }
}