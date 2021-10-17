import { Express } from "express";
import { Server } from "http";
import { socketServer } from "./socket.server";

export const socketModule = (server: Server) => {
    const io = socketServer(server)

    return {io}
}