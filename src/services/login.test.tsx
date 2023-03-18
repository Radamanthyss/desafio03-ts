import { login } from "./login"

describe('login', () => {

    const mockEmail = 'nath@dio.bank'
    it('Deve exibir um alert com boas vindas caso o email seja válido', async() => {
        const response = await login(mockEmail,'1256')
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async() => {
        const response = await login('email@invalido.com','75883')
        expect(response).toBeFalsy()
    })

    it('Deve exibir um erro caso a senha seja inválida', async() => {
        const response = await login('email@bol.com','')
        expect(response).toBeFalsy()
    })
})