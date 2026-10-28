console.log("Hola mundo desde Node.js");

/*==========================
    Modulos en Node.js
============================

Los modulos son como bloques de construccion que nos permiten organizar y reutilizar codigo de forma eficiente

En lugar de tener todo el codigo en un archivo gigante, podemos dividirlo en diferentes archivos o "modulos" y luego importarlos donde los necesitemos, lo cual hara nuestro codigo mas limpio, facil de mantener y escalar

Node.js tiene varios modulos integrados listos para usar y que nos permiten hacer cosas como trabajar con el sistema de archivos, manejar rutas o realizar tareas en la red. Es decir, Node.js nos ofrece APIs para poder interactuar con todo esto
*/

// fs (File System): Este modulo nos permite interactuar con el sistema de archivos. Podremos leer, escribir, actualizar y borrar archivos de forma sencilla
// Para usar el modulo fs, importamos este modulo en la siguiente linea
const fs = require("fs"); // Ahora con fs podre usar todos los metodos y funcionalidades de File System

fs.readFile("archivos/leeme.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Ocurrio un error: ", err);
        return; // Todo el codigo abajo de return no se ejecutara y sale de esta funcion
    }

    console.log("Contenido del archivo: ", data);
});


// path: El modulo path nos ayuda a manejar y manipular rutas de archivos y directorios de forma mas segura y comoda
const rutaArchivo = "Escritorio/Docencia/2026/Cuatri\ 2/UTN2026_c2Div132/4_nodejs/archivos/leeme.txt";
const path = require("path");

const nombreArchivo = path.basename(rutaArchivo);
console.log(`El nombre del archivo es: ${nombreArchivo}`); // El nombre del archivo es: leeme.txt


// os (Operative System): El modulo os nos permite obtener informacion del sistema operativo en el que estamos ejecutando Node.js. Por ejemplo para obtener la cantidad de memoria libre o el tipo de sistema operativo
const os = require("os");

const memoriaLibre = os.freemem();
const tipoSistema = os.type();

console.log(`Memoria libre: `, memoriaLibre); // Memoria libre:  8922308608
console.log(`Tipo de sistema operativo: `, tipoSistema); // Tipo de sistema operativo:  Linux



/*===============================
    Comprendiendo los modulos
=================================

Cada vez que usamos require estamos "importando" un modulo para que podamos usar sus funciones en nuestro archivo actual.
Basicamente para poder dividir la logica en distintos archivos y no tener un pergamino kilometrico en un solo archivo.

Este enfoque nos permite organizar mejor nuestro codigo evitando que todo este en un solo archivo y reutilizando funciones de diferentes parte sde nuestro proyecto
*/

// Importamos la funcion saludar del modulo saludos.js
const saludar = require("./saludos"); // Gracias a esto podemos dividir la logica y usar funcionalidades de otros archivos

console.log(saludar("Franco")); // Hola, Franco