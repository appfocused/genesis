"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var serverless = require('serverless-http');
exports.handler = serverless(app_1.default);
//# sourceMappingURL=server.js.map