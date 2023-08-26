//8) Programa una función que obtenga un numero aleatorio entre 501 y 600.

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
console.log(getRandomArbitrary(501,600))
