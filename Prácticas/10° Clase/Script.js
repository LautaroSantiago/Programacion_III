/*=========================================
    * callbacks
=========================================*/
// * saludo basico funciones

function saludar(nombre, callback){
    console.log(`Hola ${nombre}`);
    callback(nombre);
}

function despedirse(nombre){
    console.log(`Chau ${nombre}`);
}

saludar("Matias", despedirse);


const miMensajeCB = function(){
    console.log("Callback ejecutado");
};

function ejecutarCallback(callback){
    callback();
}

ejecutarCallback(miMensajeCB);


////////////////////////////
// 2. Sincronia y Asincronia

function procesoPesado(callback) {
    console.log("Iniciando proceso pesado sincronico...");

    // Simulamos un procesamiento que tarde unos segundos en correr
    for (let i = 0; i < 3000; i++) { // ! problema
        console.log("<- Numero de iteraciones");
    }

    callback(); // Cuando termine este proceso lento de arriba, llamara al callback
}

//  Definimos el callback aca adentro
//  procesoPesado(() => console.log("Proceso completado"));
//  console.log("Todo el codigo posterior se esta demorando");

// *  Ejemplo de asincronia
function procesoAsincrono(callback) {
    console.log("Iniciando proceso asincrono..."); // ? 2do mensaje

    // Nuestro callback sera llamado dentro de una funcion asincrona (en este caso un temporizador)
    setTimeout(function() {
        callback(); // ! 4to mensaje: Proceso asincrono completado (se ejecuta despues, al ser asincronico)
    }, 2000); // Nuestro temporizador tiene un primer parametro (funcion) y un segundo parametro (numero) -> milisegundos
}

console.log("mensaje antes proceso asincrono"); // ? 1er mensaje

procesoAsincrono(function() {
    console.log("Proceso asincrono completado");
});

console.log("mensaje por consola (ejecuta inmediatamente)"); // ? 3er mensaje

/* Salida por consola:
mensaje antes proceso asincrono
Iniciando proceso asincrono...
mensaje por consola (ejecuta inmediatamente)
(a los 2 segs) Proceso asincrono completado */


/*=========================================
    * Casos de uso comunes de callbacks
=========================================*/

// ! 1. Temporizadores (timers): setTimeout (se ejecuta 1 vez), setInterval(se ejecuta en intervalos de x segundos)
setTimeout(() => console.log("Esto se ejecuta despues de 3 segundos"), 3000);
console.log("Mensaje que no espera al temporizador");

// ! 2. Eventos del DOM
const boton = document.getElementById("boton");
boton.addEventListener("click", function(event) {
    console.log(`Boton clickeado ${event.target}`);
});

// ! 3. Metodos funcionales
const numeros = [1, 2, 3, 4, 5];

// ! forEach
numeros.forEach(function(numero, indice) {
    console.log(`Indice: ${indice}, Valor: ${numero}`);
});

// ! map
const duplicados = numeros.map(num => num * 2);
// * 5 peticiones HTTP
// * 6 lectura archivos node.js 


// Ejemplo de Callback Hell (Pyramid of Doom) ctrl + shift + i
/*
function procesoCompleto(callback) {
    paso1(function (error, resultado1) {
        if (error) return callback(error);
        paso2(resultado1, function (error, resultado2) {
            if (error) return callback(error);
            paso3(resultado2, function (error, resultado3) {
                if (error) return callback(error);
                paso4(resultado3, function (error, resultadoFinal) {
                    if (error) return callback(error);
                    callback(null, resultadoFinal);
                });
            });
        });
    });
}
*/
/*
Alternativas modernas al callback hell

    - Promesas: .then().catch()
    - Async/Await: Sintaxis mas limpia y legible para trabajar con promesas

*/

// Mismo ejemplo con async/await
/*
async function procesoCompleto() {
    try {
        const resultado1 = await paso1();
        const resultado2 = await paso2(resultado1);
        const resultado3 = await paso3(resultado2);
        const resultadoFinal = await paso4(resultado3);
        return resultadoFinal;
    } catch (error) {
        console.error('Error:', error);
    }
}
*/
/*=========================================
    ! Callbacks y High Order Functions
=========================================

* Un callback es simplemente una funcion que pasamos como argumento a otra funcion
* Y que sera llamada en algun momento dentro de esa funcion

* Es el USO CONCRETO de pasar una funcion como parametro


* Una High Order Function (HOF) / Funcion de alto nivel es una funcion que cumple al menos
* una de estas dos condiciones o ambas

    1. Recibe una o mas funciones como argumentos (ej: map, filter, reduce)
    2. Devuelve una funcion como resultado
*/

// ! Caso 1: Recibe una funcion
// ! const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(num => num * num); // map() recibe una funcion como argumento
// map es una HOF porque recibe un callback como argumento

// Caso 2: Devuelve una funcion
function multiplicador(factor) {
    return function(x) {
        return x * factor
    }
}
// Multiplicador es una HOF porque devuelve una funcion

const duplicar = multiplicador(2);
console.log(duplicar(5)); // 10