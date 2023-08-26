//10) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el 
  //  producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

  function factorial(numero){
    if(!numero){
        return console.error("Debes dar un numero.")
    }if(Math.sign(numero) === -1){
        return console.error("No hay factorial de numeros negativos.");
    }if(typeof(numero) !== "number"){
        return console.error("Debe ser un numero.");
    }
    let factorial = 1;
    for(let i =1; i<=numero; i++){
        factorial *= i;
    }
    return factorial;
}
