//9) Programa una función que reciba un número y evalúe si es 
//capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

function capicua(numero){
    const arrayNum = [];
    let invertido = [];
    let reversa = [];
    let boolean = false;
    let cont = 0;

    while(numero > 0){
        let digito = numero % 10;
        numero = Math.trunc(numero/10);
        arrayNum.push(digito);
    }
    //Creamos duplicado de arrayNum
    //para evitar afectar arrayNum al usar
    //reverse().
    reversa = [...arrayNum];
    invertido = reversa.reverse();
   

    for(let i = 0; i<arrayNum.length; i++){
        if(arrayNum[i] === reversa[i]){
            cont++;
        }if(cont === arrayNum.length){
            boolean = true;
        }else{
            boolean = false;
        }
    }
    return boolean;
}


/*
Manera optima

numero = numero.toString();
let alReves = numero.split("").reverse.join("");
retrun((numero === alReves))

*/