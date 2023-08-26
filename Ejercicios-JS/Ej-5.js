//5) Programa una función para contar el número de veces que se repite 
//una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

function contarPalabras(cadena) {
    cadena = cadena.toLowerCase();
    let array = cadena.split(" ");
    let wordCount = {};

    for (let i = 0; i < array.length; i++) {
        let word = array[i];
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }

    return wordCount;
}
