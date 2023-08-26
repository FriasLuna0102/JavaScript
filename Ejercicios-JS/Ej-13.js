//13) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

function cAF(numero = undefined, unidad){
    if(!unidad)      
        return console.error("Debes dar una unidad.")
       
    if(typeof numero !== "number")
        return console.error("Debe ser un numero.");

    if(numero === undefined)
        return console.error("No es un numero");

    if(unidad === 'C')
        return console.log("Son "+(numero*(9/5)+32)+"°F");
    if(unidad === 'F')
        return console.log("Son "+(numero-32)*(5/9)+"°C")
    else if(unidad !== 'C' && unidad !== 'F'){
        return console.log("La unidad solo puede ser C o F.");
    }
}
