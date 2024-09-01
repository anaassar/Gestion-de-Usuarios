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