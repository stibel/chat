"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ws_1 = __importDefault(require("ws"));
var port = process.env.port || 3000;
var app = (0, express_1.default)();
var server = app.listen(port, function () { return console.log("listening to " + port); });
var wsServer = new ws_1.default.Server({ server: server });
wsServer.on('connection', function (socket) { return socket.on('message', function (message) { return console.log("Got a message: " + message); }); });
