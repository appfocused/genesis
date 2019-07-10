"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var uuid = require("uuid");
exports.createPortfolio = function (req, res) {
    var _a = req.body, name = _a.name, ccy = _a.ccy;
    console.log(uuid);
    var userId = 'vitkon';
    var timestamp = new Date().toISOString();
    var id = uuid.v4();
    var params = {
        TableName: config_1.PORTFOLIOS_TABLE,
        Item: {
            id: id,
            name: name,
            ccy: ccy || 'USD',
            timestamp: timestamp,
            userId: userId
        }
    };
    config_1.dynamoDb.put(params, function (error) {
        if (error) {
            console.log(error);
            res.status(400).json({ error: 'Could not create portfolio' });
        }
        res.json({ id: id, userId: userId, name: name, ccy: ccy, timestamp: timestamp });
    });
};
//# sourceMappingURL=portfolios.js.map