//22) Programa una función que dado un array de 
//números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

function objetoParImpar(array){
    const arrayPar = [],
    arrayImpar = [];
    let contadorP = 0, 
    contadorI = 0;

    for(let i=0;i<array.length;i++){
        if(array[i] % 2 === 0 ){
            arrayPar[contadorP] = array[i];
            contadorP++;
        }else{
            arrayImpar[contadorI] = array[i];
            contadorI++;
        }
    }
    console.log(arrayPar);
    console.log(arrayImpar);

    const objetoParImpar = {
        par: arrayPar,
        impar: arrayImpar
    }
    
    return console.log(objetoParImpar)
}