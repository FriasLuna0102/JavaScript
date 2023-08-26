//4) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

function invertirCadena(cadena){
    let newCadena = [];
    let cont = 0;
    if(!cadena){
        console.error("La cadena de texto no puede estar vacia.")
    }
    if(isNaN(cadena) === false ){
        console.log("No es una cadena de texto");
    }else{

        for(let i = cadena.length-1; i != -1; i--){

        newCadena[cont] = cadena[i];
        cont++; 
    }
    return newCadena;
       
    }
}
