//16) Programa una función que dada una fecha válida determine cuantos años han pasado 
//hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

function fechaActual(fecha = undefined){
    let fechaActual = new Date();
    fechaActual = fechaActual.getFullYear();
    let fet = new Date();
    fet.setFullYear(fecha);
    return console.log(`Han pasado ${fechaActual - fet.getFullYear()} años.`);
 }
 