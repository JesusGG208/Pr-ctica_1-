function cifradoCesar() {
    let idiomaAlfabeto = document.getElementById("alfabeto");
    let textoCifrado = document.getElementById("texto");
    let numeroRotacion = document.getElementById("rotacion");

    let alfabetoIngles = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let alfabetoEspanol = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    if (idiomaAlfabeto.value === castellano) {
        alert(descifrar(idiomaAlfabeto, textoCifrado, numeroRotacion));
    } else if (idiomaAlfabeto.value === ingles) {
        alert(descifrar(idiomaAlfabeto, textoCifrado, numeroRotacion));
    }
}

function descifrar(alfabeto, texto, rota) {
    let mensajeDescifrado = "";
}