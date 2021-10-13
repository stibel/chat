import { io } from 'socket.io-client'

console.log('Client running');

const socket = io('http://localhost:3000/');

socket.emit('chat message', 'Hello');