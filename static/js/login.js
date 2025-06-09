function validar(userInput, passwdInput) {
    const defaultUser = "admin", defaultPasswd = "1234"

    if (userInput === defaultUser && passwdInput === defaultPasswd) {
        return true
    } else {
        return  false
    }
}

function login() {
    const userInput = document.getElementById("email").value
    const passwdInput = document.getElementById("password").value

    if (userInput === "" || passwdInput === "" ) {
        alert("Por favor, ingrese sus datos")
    } else { 
        if (validar(userInput, passwdInput)) {
            alert("Credenciales validas")
        } else {
            alert("Credenciales invalidas")
        }
    }
}

document.getElementById("boton-login").addEventListener("click", login);