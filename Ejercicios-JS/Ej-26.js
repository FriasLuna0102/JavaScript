/*

26) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, 
Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

*/


class Pelicula {
    constructor({idPelicula,titulo,director,anioEstreno,paisOrigen,genero,calificacionIMDB}){
        this.idPelicula = idPelicula;
        this.titulo = titulo;
        this.director = director;
        this.anioEstreno = anioEstreno;
        this.paisOrigen = paisOrigen;
        this.genero = genero;
        this.calificacionIMDB = calificacionIMDB;

        //Validaciones
        
        this.validarIMDB(idPelicula);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarAnioEstreno(anioEstreno);
        this.validarPais(paisOrigen);
        this.validarGenero(genero);
        this.validarCalificacion(calificacionIMDB);
    }
    
    validarCadenas(propiedad,valor){
        if(!valor) return console.error(`${propiedad} "${valor}" esta vacio.`);
        
        if(typeof valor !== "string") return console.warn(`${propiedad} "${valor}" no es una cadena de texto.`);

        return true;
    }

    validarEntradaArreglo(propiedad, valor){
        if(valor === undefined) return console.error(`Inserta el "${valor}" de "${propiedad}".`);
        if(Array.isArray(valor) === false) return console.error(`${propiedad} "${valor}" no es un arreglo.`);

        if(valor.length === 0) return console.warn(`"${propiedad} "${valor}" No debe estar vacio.`)

        for(let i=0;i<valor.length; i++){
            if(typeof valor[i] !== "string") return console.error(`"${propiedad}": "${valor[i]}" deben ser string.`)
        }
    
        return true;
        
    }

    validarIMDB(idPelicula){
        if(this.validarCadenas("ID: ", idPelicula) !== true){
            return 0;
        };

        let expR = /^[a-z]{2}([0-9]){7}$/g;
        if(idPelicula.length !== 9){
            return console.error(`El "${idPelicula}" debe contener 9 caracteres.`);
        }else if(expR.test(idPelicula) === false){
            return console.error(`Los primeros dos caracteres de "${idPelicula}" deben ser letras y los demas numeros.`);
        }
    }

    validarTitulo(titulo){
        this.validarCadenas("Titulo: ",titulo);
        if(titulo.length > 100 ) return console.error(`El "${titulo}" no debe rebasar los 100 caracteres.`);
    }

    validarDirector(director){
        if(this.validarCadenas("Director: ",director) !== true){
            return 0;
        }

        if(director.length > 50 ) return console.error(`Director no debe rebasar los 50 caracteres.`);
    }

    validarAnioEstreno(anioEstreno){
        if(typeof anioEstreno !== "number") return console.error(`El "${anioEstreno}" debe ser un numero.`);
        if(anioEstreno.toString().length !== 4) return console.error(`El "${anioEstreno}" debe contener cuatro digitos.`)
    }
    
    validarPais(paisOrigen){
        this.validarEntradaArreglo("Pais/es origen: ", paisOrigen);
    }

    validarGenero(genero){
        if(this.validarEntradaArreglo("Genero: ", genero) !== true){
            return 0;
        };

        let permitido = false;
        for(let i=0;i<genero.length;i++){
            if(genero[i] === "Action" || genero[i] === "Adult" || genero[i] === "Adventure"
            || genero[i] === "Animation" || genero[i] === "Biography" || genero[i] === "Comedy"
            || genero[i] === "Crime" || genero[i] === "Documentary" || genero[i] === "Drama"
            || genero[i] === "Family" || genero[i] === "Fantasy" || genero[i] === "Film Noir"
            || genero[i] === "Game-Show" || genero[i] === "History" || genero[i] === "Horror"
            || genero[i] === "Musical" || genero[i] === "Mystery" || genero[i] === "News") {
                permitido = true;
            }else{
                permitido = false;
                console.log(`${genero[i]}: ${permitido}`);
                this.genero = undefined;
                console.warn("Generos permitidos: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.")
            }
            }
        }

    validarCalificacion(calificacionIMDB){
        let expReg = /^(10(\.0{1,2})?|[0-9](\.[0-9]{1})?)$/;
        if(expReg.test(calificacionIMDB) !== true){
            return console.error(`La calificacion: ${calificacionIMDB} tiene un formato incorrecto.`);
        }
    }

    fichaTecnica(peli){
        console.log(`Ficha Tecnica de: ${this.titulo}`);
        console.table(peli);

    }
    }


const peli = new Pelicula({
    idPelicula : "fr4568794",
    titulo: "Interestelar",
    director: "Nolan",
    anioEstreno : 5568,
    paisOrigen : ["Mexico", "Canada"],
    genero : ["Action", "Crime"],
    calificacionIMDB: 8
    
});


const peliculas = [{
idPelicula : "fr4568794",
titulo: "Interestelar",
director: "Nolan",
anioEstreno : 5568,
paisOrigen : ["Mexico", "Canada"],
genero : ["Action", "Crime"],
calificacionIMDB: 8},

{ idPelicula : "tr4568747",
titulo: "Memento",
director: "Nolan",
anioEstreno : 2028,
paisOrigen : ["Mexico"],
genero : ["Action"],
calificacionIMDB: 8.9},

{idPelicula : "qq4568794",
titulo: "Inception",
director: "Nolan",
anioEstreno : 2015,
paisOrigen : ["Canada"],
genero : ["Action"],
calificacionIMDB: 9}];


//peliculas.forEach(el => new Pelicula(el).fichaTecnica(el));

function generarInstancias(peliculas){
    for(let i=0;i<peliculas.length; i++){
        peliculas[i] = new Pelicula(peliculas[i]).fichaTecnica(peliculas[i]);
    }
}

generarInstancias(peliculas)