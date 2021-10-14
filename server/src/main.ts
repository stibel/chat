import express from 'express';
import { Server } from 'socket.io';

const port = process.env.port || 3000;
const app = express();

const server = app.listen(port, (): void => console.log(`listening to ${port}`));

const io = new Server(server);

io.on('connection', socket => socket.on('chat message', message => console.log(`Got a message: ${message}`)));
