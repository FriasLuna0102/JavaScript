//12) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.  

function parImpar(numero = undefined){
    if(!numero)
        return console.error("Debes dar un numero.")

    if(Math.sign(numero) === -1)
        return console.error("No hay factorial de numeros negativos.");

    if(typeof numero !== "number")
        return console.error("Debe ser un numero.");

    if(numero === undefined)
        return console.error("No es un numero");
    
    if(numero % 2 !== 0)
        return console.log(`El numero ${numero} es Impar.`);
    else
        return console.log(`El numero ${numero} es Par.`)
    
}
