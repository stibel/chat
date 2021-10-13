"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_client_1 = require("socket.io-client");
console.log('Client running');
var socket = (0, socket_io_client_1.io)('http://localhost:3000/');
socket.emit('chat message', 'Hello');
