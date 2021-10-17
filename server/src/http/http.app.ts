import express from 'express'
import { JWTStorage } from '../types/jwt-storage.type'
import { guards } from '../auth/auth.module'

export const createApp = (storage: JWTStorage) => {
    const app = express()

    app.use(guards.JWTHTTPGuard(storage))

    return app
}