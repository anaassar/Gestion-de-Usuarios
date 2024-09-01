//import { validatePassword } from "./inicioController";

/*module.exports = {
    checkPasswords,
    verifyPassword,
    validateEmail,
    empty,
    handleRegister,
    toogleIcon,
    validateName,
    checkUsername
};*/

export function toogleIcon(password) {
    if (password.type === 'password') {
        return true;
    }else{
        return false;
    }
}


export function empty(data) {
    if (data.value==='') {
        return true;
    } else {
        return false;
    }
}



export function verifyPassword(password) {
    // Expresiones regulares para verificar los requisitos
    const minLength = /.{8,}/; // Al menos 8 caracteres
    const hasNumber = /\d/; // Al menos un número
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/; // Al menos un carácter especial
    const hasUpperCase = /[A-Z]/; // Al menos una letra mayúscula

    if (
        minLength.test(password) &&
        hasNumber.test(password) &&
        hasSpecialChar.test(password) &&
        hasUpperCase.test(password)
    ) {
        return true;
    }else{
        return false;
    }
}



export function checkPasswords(password, password2) {
    return password===password2;
    if (password === password2) {
        return true;
    } else {
        return false;
    }
}



export function validateName(name) {
    const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; // Permite letras y espacios
    return namePattern.test(name);
    /*if (namePattern.test(name.value)) {
        return true;
    } else {
        return false;
    }*/
}

export function validateEmail(mail) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Patrón básico para email

    if (emailPattern.test(mail)) {
        return true;
    } else {
        return false;
    }
}

// Lista negra de palabras ofensivas, nombres de figuras públicas y marcas registradas
const blacklist = [
    "pene", "marica", "negro", "teta", "sexo", "maricon", "peruano", "mierda", "hijueputa", "gonorrea", "huevo", "guebo", "porn",
    "obama", "trump", "petro", "uribe", "merkel", "maduro", "chavez", 
    "mcdonalds", "hp", "ibm", "microsoft", "git", "facebook", "instagram", "youtube", "tinder", "whatsapp"
    // Agrega más palabras según sea necesario
];


export function checkUsername(username) {
    const usernameValue = username.toLowerCase(); // Convierte a minúsculas para comparar
    const isInvalid = blacklist.some(word => usernameValue.includes(word));
    
    // Si encuentra alguna palabra prohibida, isInvalid será true, de lo contrario será false.
    return !isInvalid;
    
}


export function handlePageNavigation(name,lastname,email,passw,username,avatar) {
    const userInfo = {
        name:name,
        lastname:lastname,
        email:email, 
        password:passw,
        username:username,
        avatar:avatar
    }
    console.log(userInfo);
}

export function handleRegister(p1,r1,p2,r2,p3,r3,p4,r4) {
    const preguntas = {
        pUno: p1,
        rUno:r1,
        pDos:p2,
        rDos:r2,
        pTres:p3,
        rTres:r3,
        pCuatro:p4,
        rCuatro:r4
    }

    console.log(preguntas);
}

/*export function data(userInfo,preguntas) {
    const user ={
        userInfo: userInfo,
        preguntas: preguntas
    }
    console.log(user);
}*/