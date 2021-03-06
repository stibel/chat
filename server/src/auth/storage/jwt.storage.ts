import { differenceInDays } from 'date-fns'
import { TOKEN_EXPIRATION_DAYS } from '../../globals/auth.globals'
import { JWTMap, JWTStorage, JWTValidation } from '../../types/jwt-storage.type'

export const jwtStorage = (): JWTStorage => {
    const storage: JWTMap = new Map<string, Date>()

    const jwtExist = (jwt: string) => storage.has(jwt)

    const addToStorage = (jwt: string) => {
        if(!jwt)
            throw new Error('Jwt must be a non empty string')

        return storage.set(jwt, new Date())
    }

    const removeFromStorage = (jwt: string) => storage.delete(jwt)

    const getExpirationDate = (jwt: string) => storage.get(jwt)

    const validateToken = async (jwt: string | undefined): Promise<JWTValidation>  => {        
        if (!jwt || !jwtExist(jwt))
            return {
                isValid: false,
                expirationDate: null
            }

        //Must be date after check
        const expirationDate = getExpirationDate(jwt)

        const isValid = differenceInDays(new Date(), expirationDate as Date) < TOKEN_EXPIRATION_DAYS

        //There is no point in storing invalid tokens
        if (!isValid)
            removeFromStorage(jwt)

        return {
            isValid,
            expirationDate: expirationDate as Date
        }
    }

    return {
        storage,
        jwtExist,
        addToStorage,
        removeFromStorage,
        validateToken,
        getExpirationDate
    }
}