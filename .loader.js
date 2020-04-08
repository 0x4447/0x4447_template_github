//
//  This file is used in the package.json file to execute the code that starts
//  in index.js in a way that mimiks the AWS Lambda environment 1:1.
//
//  This way it is easy to test the Lambda locally, and be confident that
//  it will run the same on AWS itself.
//
exports =
    require("./index")
        .handler(require("./.payloads/event.json"), require("./.payloads/context.json"))
        .then(function (response) {

            console.info(JSON.stringify(response, null, 4));

        }).catch(function (error) {

            console.error(error);

        })
