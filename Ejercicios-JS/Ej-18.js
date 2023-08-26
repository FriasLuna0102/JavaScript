//18) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Starlin Frias") devolverá verdadero.

function validarNombre(cadena = undefined){
    if(!cadena) return console.error("La cadena no puede estar vacia.");

    if(typeof cadena === "number") return console.error("Debe ser un string.");

    let expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/ig;   
    let duplicado = expRegNombre.test(cadena);

   return console.log(duplicado);
}
