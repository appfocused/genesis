"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var homeController = require("./controllers/home");
var portfoliosController = require("./controllers/portfolios");
var app = express();
var baseUrl = '/api';
app.use(cors());
app.use(bodyParser.json({ strict: false }));
app.get(baseUrl + "/", homeController.index);
app.post(baseUrl + "/portfolios", portfoliosController.createPortfolio);
exports.default = app;
//# sourceMappingURL=app.js.map