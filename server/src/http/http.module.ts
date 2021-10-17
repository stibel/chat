import { jwtStorage } from "../auth/auth.module"
import { HTTP_PORT } from "../globals/http.globals"
import { createApp } from "./http.app"
import { httpServer } from "./http.server"

export const httpModule = () => {

    const storage = jwtStorage()

    const app = createApp(storage)

    const server = httpServer(app)

    return {app, server}
}