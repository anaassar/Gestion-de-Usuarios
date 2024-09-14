/*module.exports = {
    validateUsername,
    validatePassword,
    checkEmpty,
    handleLogin,
    toogleIcon
};*/



export function handleLogin(username, password) {
    console.log('Username:', username);
    console.log('Password:', password);
    return true;
}

export function toogleIcon(password) {
    if (password.type === 'password') {
        return true;
    }else{
        return false;
    }
}

export function validateUsername(username) {
    if (username=== '') {
        return false;
    } else {
        return true;
    }
}

export function validatePassword(password) {
    if (password === '') {
        return false;
    } else {
        return true;
    }
}

export function checkEmpty(emptyIcons) {
    if (emptyIcons.length>0) {
        return true;
    } else {
        return false;
    }
}


//  ︵‿︵‿୨♡୧ PAGINA DOS (2FA) ୨♡୧‿︵‿︵

export function handle2fa(code) {
    //window.location.href = 'inicio.html';
    console.log('Code:', code);
    return true;
}

export function validateCode(code) {
    return code==='';
}