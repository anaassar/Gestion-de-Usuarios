//import { checkEmpty, handleLogin, toogleIcon, validatePassword, validateUsername } from "../inicioController.js";
const { checkEmpty, handleLogin, toogleIcon, validatePassword, validateUsername } = require("../../src/controller/inicioController.js");

describe('login module', () => {
    
    test('inicio de sesion', () =>{
        expect(handleLogin('ana','1234')).toBe(true);
    })

    test('cambiar visibilidad de contrasena',() => {
        expect(toogleIcon('text')).toBe(false);
    })

    test('validar campo username',() =>{
        expect(validateUsername('ana')).toBe(true);
    }
    )

    test('validar campo contrasena',() =>{
        expect(validatePassword('1234')).toBe(true);
    }
    )

})

