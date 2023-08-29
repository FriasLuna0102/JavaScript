//21) Programa una función que dado un array devuelva 
//el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].


function mayorMenor(array){
    let menor = 0, 
    mayor = 0;
    //Usamos: array.sort(function(a,b) {return a - b}
    //para ordenar el arreglo, y la function(a,b)
    //ya que sort() ordena de manera alfatica no por numero.
    let arrayOrdenado = [...array.sort(function(a,b) {return a - b})];
    mayor = arrayOrdenado[arrayOrdenado.length-1];
    menor = arrayOrdenado[0];
    
    return console.log(`Mayor: ${mayor}, Menor: ${menor}`);
}
