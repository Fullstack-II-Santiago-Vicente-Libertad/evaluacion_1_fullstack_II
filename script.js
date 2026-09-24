let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;
    let mensaje = document.getElementById("mensaje");

    if (nombre == "") {
        mensaje.textContent = "Debes ingresar tu nombre.";
    }
    else if (correo == "") {
        mensaje.textContent = "Debes ingresar tu correo.";
    }
    else if (password.length < 6) {
        mensaje.textContent = "La contraseña debe tener al menos 6 caracteres.";
    }
    else {
        mensaje.textContent = "Registro realizado correctamente.";
    }

});

