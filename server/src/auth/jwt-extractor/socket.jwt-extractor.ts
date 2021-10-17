import { Socket } from "socket.io";
import { Extractor } from "../../types/extractor.type";

export const socketJWTExtractor: Extractor<Socket> = (socket) => {
    return socket.handshake.auth.token;
} 