let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let motivo = document.getElementById("motivo").value;
    let mensaje = document.getElementById("mensaje");

    if (nombre == "") {
        mensaje.textContent = "Debes ingresar tu nombre.";
    }
    else if (correo == "") {
        mensaje.textContent = "Debes ingresar tu correo.";
    }
    else if (nombre.length > 100) {
        mensaje.textContent = "El nombre excede el máximo de caracteres.";
    }
    else if (motivo == "") {
        mensaje.textContent = "Debes ingresar un motivo.";
    }
    else if (correo.length > 100) {
        mensaje.textContent = "El correo excede el máximo de caracteres.";
    }
    else if (!correo.includes("@duocuc.cl") && !correo.includes("@profesor.duoc.cl") && !correo.includes("@gmail.com")) {
        mensaje.textContent = "Ingresa un correo válido.";
    }
    else if (motivo.length > 500) {
        mensaje.textContent = "El motivo excede el máximo de caracteres.";
    }
    else {
        mensaje.textContent = "Registro realizado correctamente.";
    }

});
