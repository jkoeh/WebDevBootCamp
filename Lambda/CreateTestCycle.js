'use strict'
exports.handler = (event, context, callback) => {

    var aws = require('aws-sdk');
    var lambda = new aws.Lambda({
        region: 'us-west-1' //change to your region
    });

    lambda.invoke({
        FunctionName: 'TestDoc',
        Payload: JSON.stringify(event, null, 2) // pass params
    }, function (error, data) {
        if (error) {
            context.done('error', error);
        }
        if (data.Payload) {
            context.succeed(data.Payload)
        }
    });
}
