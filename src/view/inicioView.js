//const handleLogin = require("./pruebas");
import { checkEmpty, handleLogin, toogleIcon, validatePassword, validateUsername } from "../controller/inicioController.js";
//const toogleIcon = require("./pruebas");

document.getElementById('toggle-icon').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const icon = document.getElementById('toggle-icon');

        if (toogleIcon(passwordField)) {
            passwordField.type = 'text';
            icon.src = '../css/images/closeeye_white.png'; // Cambia el icono a uno de "ojo cerrado"
        } else {
            passwordField.type = 'password';
            icon.src = '../css/images/openeye_white.png'; // Cambia el icono a uno de "ojo abierto"
        }
});


document.getElementById('username').addEventListener('input', function() {
    const usernameField = document.getElementById('username');
    const validIcon = document.getElementById('username-valid-icon');

    if (!validateUsername(usernameField.value)) {
        validIcon.classList.remove('valid');
        validIcon.classList.add('empty');
        validIcon.style.display = 'inline-block';
        validIcon.removeAttribute('title');
    } else{
        validIcon.classList.remove('empty');
        validIcon.classList.add('valid');
        validIcon.style.display = 'inline-block';
        validIcon.removeAttribute('title');
    }
});


document.getElementById('password').addEventListener('input', function() {
    const passwordField = document.getElementById('password');
    const validIcon = document.getElementById('password-valid-icon');

    
    if (!validatePassword(passwordField.value)) {
        validIcon.classList.remove('valid');
        validIcon.classList.add('empty');
        validIcon.style.display = 'inline-block';
        validIcon.removeAttribute('title');
    } else{
        validIcon.classList.remove('empty');
        validIcon.classList.add('valid');
        validIcon.style.display = 'inline-block';
        validIcon.removeAttribute('title');
    }
});

document.getElementById('next').addEventListener('click', function(event) {
    
    const emptyIcons = document.querySelectorAll('.empty');

    // Captura los valores de username y password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica si hay algún ícono inválido
    if (checkEmpty(emptyIcons)) {
        event.preventDefault(); // Evita que se navegue a la siguiente página
        alert('Ingresa tu información!');
    } else {
        if (handleLogin(username, password)) {
            console.log('inicio de sesion');
        } else {
            console.log('no');
        }
    }
    }
);

