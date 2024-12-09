// La función que valida el formulario
function validaFormulario() {
    // Los inputs que importan en este ejercicio
    let contrasena = document.getElementById("nuevaContrasena");
    let contrasena2 = document.getElementById("confirmarContrasena");
    let indicio = document.getElementById("indicio");

    // La expresión regular para la contraseña
    let expContrasena = /^[A-Z][A-Za-z\d]{5,}$/;

    // Se verifica si la contraseña sigue la condición de la expresión regular
    if (expContrasena.test(contrasena.value) === false) {
        alert("La contraseña debe empezar por una letra mayúscula, tener un mínimo de 6 caracteres y contener, al menos, un dígito"); // Muestra el mensaje
        contrasena.focus(); // Cuando se muestre el mensaje, este input tomará el foco
        return false;
    }

    // Se verifica si la segunda contraseña coincide con la primera
    if (contrasena2.value !== contrasena.value) {
        alert("Las contraseñas escritas no coinciden. Vuelve a intentarlo"); // Muestra el mensaje
        contrasena2.focus(); // Cuando se muestre el mensaje, este input tomará el foco
        return false;
    }
    
    // Se verifica si en el indicio no está la contraseña
    if (indicio.value.includes(contrasena.value)) {
        alert("El indicio de contraseña no puede contener la contraseña"); // Muestra el mensaje
        indicio.focus(); // Cuando se muestre el mensaje, este input tomará el foco
        return false;
    }

    // Si todo es válido, el formulario se enviará
    return true;
}
