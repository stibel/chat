import { Express } from "express";
import { Server } from "socket.io";
import { Server as HttpServer } from "http";

export const socketServer = (server: HttpServer) => {
    return new Server(server, {
        cors: {
            origin: 'http://localhost:3001'
        }
    })
}