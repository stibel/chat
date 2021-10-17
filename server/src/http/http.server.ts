import { Express } from "express";
import { HTTP_PORT } from "../globals/http.globals";

export const httpServer = (app: Express) => {
    const server = app.listen(HTTP_PORT, () => {
        console.log(`HTTP Server listening on http://localhost:${HTTP_PORT}`)
    })

    return server
}