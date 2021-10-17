import { NextFunction, Request, Response } from "express";
import { decode } from "jsonwebtoken";
import { Socket } from "socket.io";
import { JWTStorage } from "../../types/jwt-storage.type";
import { socketJWTExtractor } from "../jwt-extractor/socket.jwt-extractor";

export const socketJWTGuard = (storage: JWTStorage) => async (
    socket: Socket,
    next: NextFunction
) => {
    const jwt = socketJWTExtractor(socket)
    if (jwt && (await storage.validateToken(jwt)).isValid) {
        socket.data.user = decode(jwt) as Express.User
        next()
    } else
        next(new Error('Token is invalid'))

}