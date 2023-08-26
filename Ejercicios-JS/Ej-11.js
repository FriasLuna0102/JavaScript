//11) Programa una función que determine si un 
//número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

function primo(numero = undefined){
    if(!numero)
        return console.error("Debes dar un numero.")

    if(Math.sign(numero) === -1)
        return console.error("No hay factorial de numeros negativos.");

    if(typeof numero !== "number")
        return console.error("Debe ser un numero.");

    if(numero === undefined)
        return console.error("No es un numero");
    
    if(numero % 2 !== 0 && numero % 3 !== 0)
        return true;
    else
        return false
    
}
