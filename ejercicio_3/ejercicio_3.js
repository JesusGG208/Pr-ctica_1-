// Cuando haces clic en el botón de descifrar, se ejecuta la función del cifrado Cesar
document.getElementById("descifrar").addEventListener("click", () => { cifradoCesar(); });

//  Esta función toma el valor de cada campo y procede a usar el método del desciframiento dependiendo del alfabeto
function cifradoCesar() {
    let idiomaAlfabeto = document.getElementById("alfabeto");
    let textoCifrado = document.getElementById("texto").value;
    let numeroRotacion = parseInt(document.getElementById("rotacion").value);

    let alfabetoIngles = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let alfabetoEspanol = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    if (idiomaAlfabeto.value === "castellano") {
        let mensaje = descifrar(alfabetoEspanol, textoCifrado, numeroRotacion); // Aquí utiliza el alfabeto en castellano
        document.getElementById("resultado").innerText = mensaje; // Pone la frase en el texto
    } else if (idiomaAlfabeto.value === "ingles") {
        let mensaje = descifrar(alfabetoIngles, textoCifrado, numeroRotacion); // Aquí utiliza el alfabeto en inglés
        document.getElementById("resultado").innerText = mensaje; // Pone la frase en el texto
    }
}

function descifrar(alfabeto, texto, rotacion) {
    let mensajeDescifrado = ""; // La variable de la frase descifrada

    // Se recorre cada caracter de la frase en esta variable
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto.charAt(i);

        // Se comprueba si el caracter está en el alfabeto
        if (alfabeto.includes(caracter)) {
            // Se recorre el alfabeto hasta dar con la letra
            for (let j = 0; j < alfabeto.length; j++) {
                if (caracter === alfabeto.charAt(j)) {
                    // Aquí se hace la rotación
                    let nuevoCaracter = j - rotacion;
                    if (nuevoCaracter < 0) {
                        nuevoCaracter += alfabeto.length;
                    }
                    // Se añade el caracter nuevo al mensaje descifrado
                    mensajeDescifrado += alfabeto.charAt(nuevoCaracter);
                    break;
                }
            }
        } else {
            mensajeDescifrado += caracter; // En caso de que el caracter no esté en el alfabeto, se deja tal y como estaba
        }
    }

    // Finalmente devuelve la frase
    return mensajeDescifrado;
}