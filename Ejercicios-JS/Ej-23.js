//23) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
//el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.


function objetoDescendeteAscendente(array){
    //Validaciones de entradas.
    if(array === undefined) return console.error("Array vacio.");

    if(Array.isArray(array) === false) return console.warn("No es un array");

    if(array.length === 0) return console.error("Array vacio.");

    //Solucion.
    const arrayOrdenado = [...array.sort(function(a,b) {return a-b})];
    let arrayReverse = [...arrayOrdenado];
    arrayReverse = arrayReverse.reverse();

    const arreglosOb = {
        arrayAscendente: arrayOrdenado,
        arrayDescendente: arrayReverse
    }
    
    return arreglosOb;
}


let pruebaa = [7,5,7,8,6]

console.log(objetoDescendeteAscendente(pruebaa));