import { checkEmpty, handleLogin, toogleIcon, validatePassword, validateUsername } from "../inicioController.js";


describe('login module', () => {
    
    test('inicio de sesion', () =>{
        expect(handleLogin('ana','1234')).toBe(false);
    })

    test('cambiar visibilidad de contrasena',() => {
        expect(toogleIcon('text')).toBe(false);
    })

    test('validar campo username',() =>{
        expect(validateUsername('')).toBe(false);
    }
    )

    test('validar campo contrasena',() =>{
        expect(validatePassword('')).toBe(false);
    }
    )

})

