import { differenceInMinutes, sub } from "date-fns"
import { sign } from "jsonwebtoken"
import { TOKEN_EXPIRATION_DAYS } from "../../globals/auth.globals"
import { jwtStorage } from "../storage/jwt.storage"

const {
    storage,
    addToStorage,
    removeFromStorage,
    validateToken,
    getExpirationDate,
    jwtExist
} = jwtStorage()

const token = sign({ username: 'test' }, 'secret')

describe('JWT STORAGE', () => {

    beforeEach(() => {
        storage.clear()
        addToStorage(token)
    })

    test('Add - to storage', () => {
        const date = getExpirationDate(token)

        if (!date)
            return expect(date).not.toBeUndefined()

        expect(differenceInMinutes(new Date(), date)).toBe(0)
    })

    test('Add - empty token', () => {
        expect(() => addToStorage('')).toThrowError()
    })

    test('Remove - from storage', () => {
        removeFromStorage(token)

        expect(jwtExist(token)).toBeFalsy()
    })

    test('Remove - not existing jwt', () => {
        removeFromStorage('123')

        expect(jwtExist('123')).toBeFalsy()
    })

    test('Validate - valid token', async () => {
        const { isValid } = await validateToken(token)

        expect(isValid).toBeTruthy()
    })

    test('Validate - expired token', async () => {
        storage.set(token, sub(new Date(), { days: TOKEN_EXPIRATION_DAYS + 1 }))

        const { isValid } = await validateToken(token)

        const exist = jwtExist(token)

        expect({ exist, isValid }).toStrictEqual({ exist: false, isValid: false })
    })

    test('Validate - invalid token', async () => {
        const { isValid } = await validateToken('123')

        const exist = jwtExist('123')

        expect({ exist, isValid }).toStrictEqual({ exist: false, isValid: false })
    })

    test('Expiration date', async () => {
        storage.set(token, new Date(2000, 4, 7))

        expect(getExpirationDate(token)).toEqual(new Date(2000, 4, 7))
    })

})
