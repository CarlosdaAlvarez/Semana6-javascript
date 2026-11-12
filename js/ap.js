// 1. Acceder a los elementos del DOM

const nombre = document.querySelector("#nombre");
const boton = document.querySelector("#botonSaludar");
const mensaje = document.querySelector("#mensaje");


// 2. Crear una función

function saludar() {

    // Obtener el valor ingresado
    const nombreUsuario = nombre.value.trim();

    // Reto 4: el nombre debe tener entre 5 y 50 caracteres
    if (nombreUsuario.length < 5 || nombreUsuario.length > 50) {
        const primerNombre = nombreUsuario.split(" ")[0] || "Usuario";
        mensaje.textContent =
            primerNombre + ", tu nombre debe tener mínimo 5 y máximo 50 caracteres.";
        return;
    }

        // Actualizar el contenido del DOM
        mensaje.textContent =
            "¡Hola, " + nombreUsuario +
            "! Bienvenido a mi aplicación web.";

}

// 5. Escuchar el evento del botón

boton.addEventListener("click", saludar);