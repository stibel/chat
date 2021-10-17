import { Request } from "express";
import { COOKIE_NAME } from "../../globals/auth.globals";
import { Extractor } from "../../types/extractor.type";

export const HTTPJWTExtractor: Extractor<Request> = (req): string | undefined => {
    return req.cookies[COOKIE_NAME]
}