document.getElementById("descifrar").addEventListener("click", () => { cifradoCesar(); });

function cifradoCesar() {
    let idiomaAlfabeto = document.getElementById("alfabeto");
    let textoCifrado = document.getElementById("texto").value;
    let numeroRotacion = parseInt(document.getElementById("rotacion").value);

    let alfabetoIngles = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let alfabetoEspanol = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    if (idiomaAlfabeto.value === "castellano") {
        let mensaje = descifrar(alfabetoEspanol, textoCifrado, numeroRotacion);
        document.getElementById("resultado").innerText = mensaje;
    } else if (idiomaAlfabeto.value === "ingles") {
        let mensaje = descifrar(alfabetoIngles, textoCifrado, numeroRotacion);
        document.getElementById("resultado").innerText = mensaje;
    }
}

function descifrar(alfabeto, texto, rotacion) {
    let mensajeDescifrado = "";

    for (let i = 0; i < texto.length; i++) {
        let caracter = texto.charAt(i);

        if (alfabeto.includes(caracter)) {
            for (let j = 0; j < alfabeto.length; j++) {
                if (caracter === alfabeto.charAt(j)) {
                    let nuevoCaracter = j - rotacion;
                    if (nuevoCaracter < 0) {
                        nuevoCaracter += alfabeto.length;
                    }
                    mensajeDescifrado += alfabeto.charAt(nuevoCaracter);
                    break;
                }
            }
        } else {
            mensajeDescifrado += caracter;
        }
    }

    return mensajeDescifrado;
}