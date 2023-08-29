//24) Programa una función que dado un arreglo de elementos, 
//elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].





function sinDuplicados(array){
    //Validaciones de entradas.
    if(array === undefined) return console.error("Array vacio.");

    if(Array.isArray(array) === false) return console.warn("No es un array");

    if(array.length === 0) return console.error("Array vacio.");

    //Solucion.
    return console.info({
        original : array,
        sinDuplicado : array.filter((value,index,self) => self.indexOf(value) === index)

    })    
}

//El constructor Set nos delvuelve otro arreglo
//sin duplicados.
/*
return console.info({
    original : array,
    sinDuplicado: new Set(array)
    })     
*/