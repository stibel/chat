export type JWTStorage = Map<string, Date>

export type JWTValidation = { isValid: boolean, expirationDate: Date | null }
