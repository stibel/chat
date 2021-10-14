import express from 'express';
import { Server } from 'socket.io';
import { MESSAGES, ROOMS } from './globals/rooms';

const port = process.env.port || 3000;
const app = express();

const server = app.listen(port, (): void => console.log(`listening to ${port}`));

const io = new Server(server);

io.on('connection', socket => {

    socket.join(ROOMS.ALL)

    socket.on(MESSAGES.ALL, (msg: any) => {
        socket.broadcast.to(ROOMS.ALL).emit(MESSAGES.ALL, msg)
    })

    
});