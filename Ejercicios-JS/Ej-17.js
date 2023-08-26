//17) Programa una función que dada una cadena de texto cuente el número de vocales y 
//consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5

function vocalesConsonantes(cadena = undefined){

    if(!cadena) return console.error("La cadena no puede estar vacia.");

    if(typeof cadena === "number") return console.error("Debe ser un string.");

   let vocales = 0, consonantes = 0;

   for(let i = 0; i<cadena.length;i++){
    if(cadena[i] == 'a' || cadena[i] == 'A')
        vocales++;
        
    if(cadena[i] == 'e' || cadena[i] == 'E')
        vocales++;
    
    if(cadena[i] == 'i' || cadena[i] == 'I')
        vocales++;
           
    if(cadena[i] == 'o' || cadena[i] == 'O')
        vocales++;
           
    if(cadena[i] == 'u' || cadena[i] == 'U')
        vocales++;
   
   }

   let expRegular = new RegExp(/[' '¿1-9.*+\-?^${}()|[\]\\]/,"ig");
   let duplicado = cadena.replace(expRegular,'');
   consonantes = duplicado.length - vocales;

   return console.log(`"${cadena}" tiene ${vocales} vocales y ${consonantes} consonantes.`);
}
    