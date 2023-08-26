//6) Programa una función que valide si una palabra o frase dada, es un 
//palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

function palindromo (cadena){
    cadena = cadena.toLowerCase();
    let invertida = invertirCadena(cadena);
    for(let i = 0;i<invertida.length; i++){

        if(invertida[i] === cadena[i] ){
            return true;
        }else{
            return false;
        }
    }   
}
