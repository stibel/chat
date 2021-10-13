"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var socket_io_1 = require("socket.io");
var port = process.env.port || 3000;
var app = (0, express_1.default)();
var server = app.listen(port, function () { return console.log("listening to " + port); });
var io = new socket_io_1.Server(server);
io.on('connection', function (socket) { return socket.on('chat message', function (message) { return console.log("Got a message: " + message); }); });
