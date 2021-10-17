import { NextFunction, Request, Response } from "express";
import { HTTPJWTExtractor } from "../jwt-extractor/http.jwt-extractor";
import {decode} from 'jsonwebtoken'
import { JWTStorage } from "../../types/jwt-storage.type";

export const JWTHTTPGuard = (storage: JWTStorage) => async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const jwt = HTTPJWTExtractor(req)
    if(jwt && (await storage.validateToken(jwt)).isValid) {
        req.user = decode(jwt) as Express.User
        next()
    } else
    next(new Error('Token is invalid'))
}