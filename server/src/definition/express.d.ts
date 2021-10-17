declare namespace Express {
    export interface User extends Express.User {
        username: string,
        id: number,
    }
}