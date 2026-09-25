// * arrays


let colores = ["rojo","verde","azul"];
console.log(colores[0]);
console.log(colores[-1]);//undefined
console.log(colores[20]);//undefined
console.log(colores.length);//tamanio arrays
console.log(colores.at(-1));//asi se accede al ultimo elemento
// ! ver resumen mas ejemplos o usos


// * objetos coleccion de pares clave-valor 
// - son string q identidican cada valor 
// - ser string permite un acceso rapido y estructurado a los datos
// - utiles p representar una entidad con multiples propiedades

let persona = {
    nombre: "Pepo",
    edad: 30,
    ciudad: "Madrid"
};
// ! como acceder
console.log(persona.ciudad);    // SELECTIVO
console.log(persona["nombre"]); // SELECTIVO
console.log(persona);           // TODO 

let gato = {
    nombre: "Gato",
    maullar: function(){
        console.log("MIAU!");
    }
};

gato.maullar();

// // // //  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //


// *  METODOS DE STRING EN JS

console.log("HI".length); // ! longitud

console.log("HI".at(1));     // ! posicion
console.log("HI".charAt(1)); // ! posicion

console.log("HI".concat(" ", "WORLD")); // ! concatena

console.log("JavasScript".includes("Script")); // ! true si el sbstring esta en el String

console.log("HI".startsWith("H")); // ! comprueba el comienzo (true)
console.log("HI".endsWith("H")); // ! comprueba el final (false)

console.log("banana".indexOf("a")); // ! primera posicion de conicidencia 
console.log("banana".lastIndexOf("a")); // ! ultima posicion de conicidencia 

console.log("HI mundou".replace("mundous", "JS")); // ! reemplaza por 

//console.log("1,2". repeatAll(",",)); // ! reemplazar0000

console.log("hi".toUpperCase()); // ! mayuscula

console.log("HI".toLowerCase()); // ! minuscula

console.log("   HI we w".trim()); // ! recorta espacio
//  trimStart()
//  trimEnd()

console.log("Javascript".slice(2,5)); // ! de donde hasta donde muestro
console.log("Javascript".slice(-6)); // ! de donde hasta donde muestro
console.log("Javascript".substring(4,10)); // ! ! de donde hasta donde muestro

console.log("HI".split("")); // ! separa cada string como array
console.log("HI, world".split(", ")); // ! separa cada string como array 

console.log("jI".repeat(3)); // ! repite

console.log("abc123".match(/[a-z]+/)); // ! busca letras minúsculas consecutivas
let fecha = "2026-09-25".match(/(\d{4})-(\d{2})-(\d{2})/);


// // // //  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //



// * METODOS DE ARRAYS

console.log([1, 2 , 3].length); // ! LONGITUD

let arr = [1,2,3];
arr.push(3)
console.log(arr);

console.log([1, 2 , 3]); // ! 
console.log([1, 2 , 3]); // ! 

console.log([1, 2 , 3]); // ! 

console.log(arr.shift()); // ! elimina el primer elemento y lo devuelve



// *  FALTAN UN PAR



console.log([1, 2 , 3].concat([4, 5, 6])); // ! concatena

console.log([1, 2 , 3].join("-")); // ! une elementos en un string

console.log([1, 2 , 3, 4, 5, 6].slice(1,3)); // ! extrae copia parcial del array (corta seleccionado)

// ! reemplaza segun lo que quiero en donde quiero 
let nuevoArray = [1,2,3,4,5,6];
nuevoArray.splice(1,2,"dos","tres"); 
console.log(nuevoArray);

console.log([1, 2 , 3].indexOf(2)); // ! devuelve la primera posicion del elemento o -1
console.log([1, 8 , 3].lastIndexOf(2)); // ! devuelve la ultima posicion del elemento o -1

console.log([1, 2 , 3].includes(2)); // ! true si incluye lo buscado


// // // //  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //



/*

!    OBJETOS GLOBALES Y ALMACENAMIENTO PERSISTENTE(ITERACION EN ARRAYS, OBJETOS Y ARRAYS DE OBJETOS)

*/

// * OBJ GLOBALES SON AQUELLOS QUE ESTAN DISPONIBLES EN TODO EL ENTORNO DE EJECUCION(NAVEGADOR Y NODE.JS)
// * *DEPENDEN DEL ENTORNO SU PROPOSITO ES FACILITR EL ACCESO A FUNCIONALIDADE Y VALORES PREDETERMINADOS* *
console.log(console); // ! muestra TODO

// * js embuelbe todo como un objeto como arays strings objects por eso provee .length a tipos de datos primitivos
// * asi los objetos intractuan con la pag web y su entorno

// * - `window` obj global principal en el entorno del navegador, representa la ventana del navegador y actua como contenedor global.
// * solamente variables var

// * - `document` representa el DOM (document) de la pagina web actual permitiendo el acceso y la manipulacion de elementos HTML

// alert("HI");
// confirm("HI");
// setTimeout() o setInterval() // ! metodos que programan ejecucion la ejecucion del codigo de un tiempo o en intervalos regulares

console.log(window.location.href); // ! devuelve la URL completa actual

console.log(navigator.userAgent); // ! te doxea un toque

// ! localStorage y sessionStorage  
// * permite almacenar datos en el navegador de manera persistente o temporal

localStorage.setItem("nombre", "Matias");
console.log(localStorage.getItem("nombre"));

history.back(); // va a la pagina anterior // * history proporciona acceso al historial

// En JavaScript  almacena datos implica elegir la estructura adecuada de acuerdo acon el tipo de información que se quiere guardar y como se quiere manipular. JS prop carios tipos deestructura de almacenamiento
// * variables simples para valores unicos como num, string,etc
// * objetos representar datos complejos con propiedades
// * arrays almacenar lista de elementos idealmente del mismo tipo
// * arrays de objetos almacena listas de elementos complejos que contienen multiples propiedades

// ! OBJETOS
// * coleccion de propiedades deibde cada prop tiene un nombre clave o key y un valor

let laPersona =  {
    nombre: "Noe",
    apellido: "Hijo de Lamec",
    pais: "Turquía",
    edad: 76,
    ocupacion: "Carpintero"
}

// * se usan para representar una unica entidad con multiples atributos,
// * cuando no habra multiples instancias o copias de esos datos en la aplicacion 
// * cuando necesitamos acceder a propiedades especificas mediante sus nombres

// ! ARAY DE OBJETOS: almacenar listas de objetos similares
