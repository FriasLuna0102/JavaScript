//19) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

function validarEmail(email = undefined){
    if(!email) return console.error("El email no puede estar vacia.");

    if(typeof email === "number") return console.error("Debe ser un string.");

    let expRegCorreo=/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;
    let duplicado = expRegCorreo.test(email);

   return console.log(duplicado);
}
