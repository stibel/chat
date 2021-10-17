export type JWTMap = Map<string, Date>

export type JWTValidation = { isValid: boolean, expirationDate: Date | null }

export interface JWTStorage {
    storage: JWTMap;
    jwtExist: (jwt: string) => boolean;
    addToStorage: (jwt: string) => JWTMap;
    removeFromStorage: (jwt: string) => boolean;
    getExpirationDate: (jwt: string) => Date | undefined;
    validateToken: (jwt: string | undefined) => Promise<JWTValidation>
}
