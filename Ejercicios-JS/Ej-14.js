//14) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

function binarioYDecimal(numero = undefined, base = undefined){
   
    let decimal = 0;
    let cont = 0;
    let binario = [];
    if(base === 2){
        numero = numero.toString();
        numero = numero.split("")

        for(let i = numero.length-1; i != -1; i--){
            if(i != -1){
                decimal += numero[cont]*(Math.pow(base,i));
                cont++;
            }
        }
        return decimal;

    }if(base === 10){
        let residuo = [];
        let index = 0;
        while(numero != 1){
            residuo[index] = numero % 2;
            index++;
            numero = Math.floor(numero/2);
            
        }      
        residuo[index] = 1;
        return residuo.reverse();  

    }else{
        console.error("Solo decimal (base 10) y binarios (base 2).")
    }
   
}


/*Version optima.

    if(base === 2){
        return console.log(`${numero} base ${base} = ${parseInt(numero,base)} base 10`)
    }else if(base === 10){
        return console.log(`${numero} base ${base} = ${numero.toString(2)} base 2`)

    }

*/