//25) Programa una función que dado un arreglo de números obtenga el 
//promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.


function promedioArray(array){
    //Validaciones de entradas.
    let string = "s";

    if(array === undefined) return console.error("Array vacio.");

    if(Array.isArray(array) === false) return console.warn("No es un array");

    if(array.length === 0) return console.error("Array vacio.");

    for(let i=0;i<array.length;i++){
        if(typeof array[i] !== "number"){
            return console.error("El array solo debe contener numeros.");
        }
    }
    //Solucion.
    let promedio = 0;
    for(let i=0;i<array.length;i++){
        promedio += array[i]/array.length;
    }
    return console.log(promedio);
}
let pruebaa = [9,8,7,6,5,4,3,2,1,0]
promedioArray(pruebaa);