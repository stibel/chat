import express from 'express';
import ws from 'ws';

const port = process.env.port || 3000;
const app = express();

const server = app.listen(port, (): void => console.log(`listening to ${port}`));

const wsServer = new ws.Server({ server });
wsServer.on('connection', socket => socket.on('message', message => console.log(`Got a message: ${message}`)));
