"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AWS = require("aws-sdk");
exports.PORTFOLIOS_TABLE = process.env.PORTFOLIOS_TABLE || '';
exports.IS_OFFLINE = process.env.IS_OFFLINE;
var getDynamoDB = function () {
    if (exports.IS_OFFLINE === 'true') {
        return new AWS.DynamoDB.DocumentClient({
            region: 'localhost',
            endpoint: 'http://localhost:8000'
        });
    }
    return new AWS.DynamoDB.DocumentClient();
};
exports.dynamoDb = getDynamoDB();
//# sourceMappingURL=index.js.map