//20) Programa una función que dado un array numérico devuelve otro array con los números elevados 
//al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

function arrayAlCuadrado(array){
    let arrayAl = [];

    for(let i=0;i<array.length;i++){
        arrayAl[i] = Math.pow(array[i],2)
    }
    return arrayAl
}
