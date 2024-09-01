
import { checkPasswords, checkUsername, empty, handlePageNavigation, handleRegister, toogleIcon, validateEmail, validateName, verifyPassword} from "../controller/registroController.js";

document.getElementById('toggle-icon').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const icon = document.getElementById('toggle-icon');

    if (toogleIcon(passwordField)) {
        passwordField.type = 'text';
        icon.src = '../css/images/closeeye.png'; // Cambia el icono a uno de "ojo cerrado"
    } else {
        passwordField.type = 'password';
        icon.src = '../css/images/openeye.png'; // Cambia el icono a uno de "ojo abierto"
    }
});


document.getElementById('password').addEventListener('input', function validatePassword() {
    const passwordField = document.getElementById('password');
    const validIcon = document.getElementById('password-valid-icon');

    
    if (empty(passwordField)) {
        validIcon.classList.remove('valid', 'invalid');
        validIcon.classList.add('empty');
        validIcon.style.display = 'inline-block';
        validIcon.removeAttribute('title'); // Remueve el tooltip cuando está vacío
    } else if (
        verifyPassword(passwordField.value)
    ) {
        validIcon.classList.remove('invalid', 'empty');
        validIcon.classList.add('valid');
        validIcon.style.display = 'inline-block';
        validIcon.removeAttribute('title'); // Remueve el tooltip si es válido
    } else {
        validIcon.classList.remove('valid', 'empty');
        validIcon.classList.add('invalid');
        validIcon.style.display = 'inline-block';
        validIcon.setAttribute('title', 'Debe tener más de 8 caracteres, incluir al menos 1 número, 1 carácter especial y 1 mayúscula.');
    }
});


// Validación de la confirmación de contraseña
document.getElementById('password2').addEventListener('input', function() {
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('password2');
    const validIcon = document.getElementById('password2-valid-icon');

    if (empty(confirmPasswordField)) {
        validIcon.classList.remove('valid', 'invalid');
        validIcon.classList.add('empty');
        validIcon.style.display = 'inline-block';
        validIcon.removeAttribute('title'); // Remueve el tooltip cuando está vacío
    } else if (checkPasswords(passwordField.value,confirmPasswordField.value)) {
        validIcon.classList.remove('invalid', 'empty');
        validIcon.classList.add('valid');
        validIcon.style.display = 'inline-block';
        validIcon.removeAttribute('title'); // Remueve el tooltip si es válido
    } else {
        validIcon.classList.remove('valid', 'empty');
        validIcon.classList.add('invalid');
        validIcon.style.display = 'inline-block';
        validIcon.setAttribute('title', 'Las contraseñas no coinciden');
    }
});


// Validación para el campo "name"
document.getElementById('name').addEventListener('input', function() {
    const nameField = document.getElementById('name');
    const validIcon = document.getElementById('name-valid-icon');
    

    if (empty(nameField)) {
        validIcon.classList.remove('valid', 'invalid');
        validIcon.classList.add('empty');
        validIcon.style.display = 'inline-block';
        validIcon.removeAttribute('title');
    } else if (validateName(nameField.value)) {
        validIcon.classList.remove('invalid', 'empty');
        validIcon.classList.add('valid');
        validIcon.style.display = 'inline-block';
        validIcon.removeAttribute('title');
    } else {
        validIcon.classList.remove('valid', 'empty');
        validIcon.classList.add('invalid');
        validIcon.style.display = 'inline-block';
        validIcon.setAttribute('title', 'Solo letras.');
    }
});

// Validación para el campo "lastname"
document.getElementById('lastname').addEventListener('input', function() {
    const lastnameField = document.getElementById('lastname');
    const validIcon = document.getElementById('lastname-valid-icon');

    if (empty(lastnameField)) {
        validIcon.classList.remove('valid', 'invalid');
        validIcon.classList.add('empty');
        validIcon.style.display = 'inline-block';
        validIcon.removeAttribute('title');
    } else if (validateName(lastnameField.value)) {
        validIcon.classList.remove('invalid', 'empty');
        validIcon.classList.add('valid');
        validIcon.style.display = 'inline-block';
        validIcon.removeAttribute('title');
    } else {
        validIcon.classList.remove('valid', 'empty');
        validIcon.classList.add('invalid');
        validIcon.style.display = 'inline-block';
        validIcon.setAttribute('title', 'Solo letras.');
    }
});

document.getElementById('email').addEventListener('input', function() {
    const emailField = document.getElementById('email');
    const validIcon = document.getElementById('email-valid-icon');

    if (empty(emailField)) {
        validIcon.classList.remove('valid', 'invalid');
        validIcon.classList.add('empty');
        validIcon.style.display = 'inline-block';
        validIcon.removeAttribute('title');
    } else if (validateEmail(emailField.value)) {
        validIcon.classList.remove('invalid', 'empty');
        validIcon.classList.add('valid');
        validIcon.style.display = 'inline-block';
        validIcon.removeAttribute('title');
    } else {
        validIcon.classList.remove('valid', 'empty');
        validIcon.classList.add('invalid');
        validIcon.style.display = 'inline-block';
        validIcon.setAttribute('title', 'No es una dirección de email válida.');
    }
});





document.getElementById('username').addEventListener('input', function() {
    
    const usernameField = document.getElementById('username');
    const validIcon = document.getElementById('username-valid-icon');
    
    // Verificar si el nombre de usuario contiene alguna palabra de la lista negra

    if (empty(usernameField)) {
        validIcon.classList.remove('valid', 'invalid');
        validIcon.classList.add('empty');
        validIcon.style.display = 'inline-block';
        validIcon.removeAttribute('title');
    } else {
        if (checkUsername(usernameField.value)) {
            validIcon.classList.remove('invalid', 'empty');
            validIcon.classList.add('valid');
            validIcon.style.display = 'inline-block';
            validIcon.removeAttribute('title');
        } else {
            validIcon.classList.remove('valid', 'empty');
            validIcon.classList.add('invalid');
            validIcon.style.display = 'inline-block';
            validIcon.setAttribute('title', 'El nombre de usuario contiene palabras prohibidas o nombres protegidos.');
        }
    }
});


// Escoger "profilepic"
document.getElementById('profilepic1').addEventListener('click', function() {
    const chosenpic = document.getElementById('profilepic1');
    const profilepic = document.getElementById('profilepic');

    if (profilepic.getAttribute('src') == '../css/images/pic1.png') {
        profilepic.setAttribute('src', '../css/images/noprofilepic.png');
    } else {
        profilepic.setAttribute('src', '../css/images/pic1.png');
    }
    
});

document.getElementById('profilepic2').addEventListener('click', function() {
    const chosenpic = document.getElementById('profilepic2');
    const profilepic = document.getElementById('profilepic');

    if (profilepic.getAttribute('src') == '../css/images/pic2.png') {
        profilepic.setAttribute('src', '../css/images/noprofilepic.png');
    } else {
        profilepic.setAttribute('src', '../css/images/pic2.png');
    }
});

document.getElementById('profilepic3').addEventListener('click', function() {
    const chosenpic = document.getElementById('profilepic3');
    const profilepic = document.getElementById('profilepic');

    if (profilepic.getAttribute('src') == '../css/images/pic3.png') {
        profilepic.setAttribute('src', '../css/images/noprofilepic.png');
    } else {
        profilepic.setAttribute('src', '../css/images/pic3.png');
    }
});



//para PRUEBAS
document.getElementById('pagina2').addEventListener('click', function(event) {
    
    event.preventDefault();
    const contenedor = document.getElementById('parte1')
    const invalidIcons = contenedor.querySelectorAll('.invalid');
    const emptyIcons = contenedor.querySelectorAll('.empty');

    if (invalidIcons.length > 0 || emptyIcons.length>4) {
        alert('Por favor, corrija los campos inválidos o vacíos antes de continuar.')
    } else {
        document.getElementById('pagina1').setAttribute('class','pagenumber2');
        document.getElementById('pagina2').setAttribute('class','pagenumber');

        const name = document.getElementById('name').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const password2 = document.getElementById('password2').value;
        const username = document.getElementById('username').value;
        const avatar = document.getElementById('profilepic').getAttribute('src');

        handlePageNavigation(name,lastname,email,password,password2,username,avatar);
        document.getElementById('parte1').style.display= 'none';
        document.getElementById('parte2').style.display= 'block';
    }
});




//Validar los inputs
document.getElementById('rt1').addEventListener('input',function () {
    const rta = document.getElementById('rt1');
    const validIcon = document.getElementById('rt1-valid-icon');

    if (empty(rta)) {
        validIcon.classList.remove('valid');
        validIcon.classList.add('empty')
    } else {
        validIcon.classList.remove('empty');
        validIcon.classList.add('valid');
    }

});
document.getElementById('rt2').addEventListener('input',function () {
    const rta = document.getElementById('rt2');
    const validIcon = document.getElementById('rt2-valid-icon');

    if (empty(rta)) {
        validIcon.classList.remove('valid');
        validIcon.classList.add('empty')
    } else {
        validIcon.classList.remove('empty');
        validIcon.classList.add('valid');
    }

});
document.getElementById('rt3').addEventListener('input',function () {
    const rta = document.getElementById('rt3');
    const validIcon = document.getElementById('rt3-valid-icon');

    if (empty(rta)) {
        validIcon.classList.remove('valid');
        validIcon.classList.add('empty')
    } else {
        validIcon.classList.remove('empty');
        validIcon.classList.add('valid');
    }

});
document.getElementById('rt4').addEventListener('input',function () {
    const rta = document.getElementById('rt4');
    const validIcon = document.getElementById('rt4-valid-icon');

    if (empty(rta)) {
        validIcon.classList.remove('valid');
        validIcon.classList.add('empty')
    } else {
        validIcon.classList.remove('empty');
        validIcon.classList.add('valid');
    }

});




//BOTON REGISTRO
document.getElementById('boton-registro').addEventListener('click', function(event) {
    
        const emptyIcons = document.querySelectorAll('.empty');

    // Verifica si hay algún ícono vacio
    if (emptyIcons.length>0) {
        event.preventDefault(); // Evita que se navegue a la siguiente página
        // Muestra un mensaje de advertencia o maneja el error como desees
        alert('Por favor, corrija los campos vacíos antes de continuar.');
    } else {
        // Si no hay campos vacíos, procede con el registro
        const preguntaUno = document.getElementById('select1').value;
        const preguntaDos = document.getElementById('select2').value;
        const preguntaTres = document.getElementById('select3').value;
        const preguntaCuatro = document.getElementById('select4').value;
        const respuestaUno=  document.getElementById('rt1').value;
        const respuestaDos = document.getElementById('rt2').value;
        const respuestaTres = document.getElementById('rt3').value;
        const respuestaCuatro = document.getElementById('rt4').value;

        handleRegister(preguntaUno, respuestaUno,preguntaDos, respuestaDos, preguntaTres,respuestaTres, preguntaCuatro,respuestaCuatro)
        alert('Registrado');
    }
    }
);









