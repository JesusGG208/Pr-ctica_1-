function esCurioso(numero) {
    let suma = 0;
    // El número se convierte en cadena, se separan y se meten en un array
    let digitos = numero.toString().split("");

    for (let i=0; i < digitos.length; i++) {
        // Se convierte cada dígito a entero y se le hace el cubo al número para después incluirlo en la suma
        let digito = parseInt(digitos[i]);
        suma += Math.pow(digito, 3);
    }

    // Si el resultado de la suma concuerda con el número que se le da al principio, quiere decir que es un número curioso y la función devolverá true 
    // En caso contrario, devolverá false
    if (suma === numero) {
        return true;
    } else {
        return false;
    }
}

// Se crea una lista donde almacenaremos los primeros 5 números naturales curiosos
let curiosos = [];

// El bucle irá probando números del 1 al 1000 para comprobar cuales de ellos son curiosos
for (let i=1; i < 1000; i++) {
    // Este condicional verifica cual número es un número curioso con el método esCurioso(numero)
    // En caso de que lo sea, lo meterá en el array
    if(esCurioso(i)) {
        curiosos.push(i);
    }

    // Cuando en el array esté los primeros 5 números naturales curiosos, el bucle parará
    if(curiosos.length === 5) {
        break;
    }
}

// Muestra una alerta con los números curiosos
alert("Números curiosos: " + curiosos);