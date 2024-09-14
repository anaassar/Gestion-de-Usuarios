
//import { checkPasswords, verifyPassword } from "../../src/controller/registroController";
const { checkPasswords, verifyPassword, validateEmail, validateName, checkUsername } = require("../../src/controller/registroController");
    

describe('register module', () => {
        
    test('campo nombre', () =>{
        expect(validateName('Ana')).toBe(true);
    })

    test('campo correo invalido', () =>{
        expect(validateEmail('ana@')).toBe(false);
    })

    test('contrasena invalida',() => {
        expect(verifyPassword('aaaaaa')).toBe(false);
    })

    test('contrasena valida',() => {
        expect(verifyPassword('Aa.12345')).toBe(true);
    })

    test('contrasenas diferentes',() => {
        expect(checkPasswords('Aa.12345','Aa.12346')).toBe(false);
    })

    test('contrasenas iguales',() => {
        expect(checkPasswords('Aa.12345','Aa.12345')).toBe(true);
    })

    test('validar campo username',() =>{
        expect(checkUsername('apene')).toBe(false);
    }
    )
});

