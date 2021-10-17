import { jwtStorage } from "./storage/jwt.storage"
import { JWTHTTPGuard } from "./guard/http-jwt.guard"
import { socketJWTGuard } from "./guard/socket-jwt.guard"

export const guards = {
    JWTHTTPGuard,
    socketJWTGuard
}

export { jwtStorage }