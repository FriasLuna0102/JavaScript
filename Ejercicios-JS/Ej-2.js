//2) Programa una función que dada una String te devuelva un Array de 
//textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']:

function arrayText(cadena){
    return cadena.split(' ',cadena.length);
}
