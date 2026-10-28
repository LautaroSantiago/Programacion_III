/*================
    Asincronia
==================

La asincronia es la capacidad de un programa de ejecutar tareas que toman tiempo (acceder a una API, esperar a un temporizador) sin bloquear la ejecucion del resto del codigo

En JavaScript, es clave, porque es un lenguaje de un solo hilo (single-threaded) lo que significa que solo puede ejecutar una tarea a la vez. Por eso, para evitar que el hilo principal se bloquee, se introducen mecanismos asincroncios que permiten "delegar" operaciones que tomaran tiempo y continuar ejecutando el resto del codigo mientras esas tareas se completan

EXTRA -> Call Stack, Task Queue, Event Loop (para comprender mas en profundidad)

//////////////////////
// Herramientas de JavaScript para asincronia

//////////////
// 1.Callbacks: Funcion que se pasa como argumento para ejecutar despues de una operacion
    - Ventajas: Flexibilidad
    - Desventajas: Callback hell, manejo de errores

    function procesoAsincrono(callback) {
        console.log("Iniciando proceso asincrono...");
    
        setTimeout(function () { 
            callback(); 
        }, 2000); 
    }
    

//////////////
// 2. Promesas: Una Promise es un objeto que representa un valor.
Este valor puede estar disponible ahora, en el futuro o nunca
Tiene tres estados
    - pending (pendiente) -> todavia no termino la conexion de red con una API REST
    - fulfilled (completo) -> recibimos correctamente los datos de nuestra API REST
    - rejected (rechazado) -> se produjo un error con los datos

///////////
// fetch() 
    - Es una Web API que nos permite realizar solicitudes HTTP.
    - Retorna una promesa

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(respuesta => respuesta.json())
        .then(data => console.table(data))
        .catch(error => console.error(error));


    1. fetch hace una peticion HTTP
    2. devuelve una promesa que
        - (caso exito) se resuelve con una response (respuesta del servidor)
        - (caso error) se rechaza si hay un error de red

//////////
// fetch
    - Una Web API, una funcion para hacer peticiones HTTP
    - Devuelve una promesa

//////////
// promesa
    - Un objeto JS, para manejar resultados asincronicos
    - Una promesa es un valor (exito o error futuro)


La asincronia en JavaScript es fundamental porque no bloquea el flujo principal del programa y nos permite:
    - Hacer llamadas a APIs externas
    - Acceder a archivos
    - Animaciones
    - Eventos de usuario
*/

// 1. Hacemos una conexion HTTP GET (request y response) con esta URL
fetch("https://jsonplaceholder.typicode.com/users")

    // 2. Realizada la conexion HTTP y recibida una respuesta HTTP
    .then(response => {
        console.log(response); // Vemos la HTTP Response en la consola
        return response.json(); // Parseo el contenido que solicite
    })

    // Terminado de parsear la informacion que solicite en la URL
    .then(data => {
        // Ahora ya puedo trabajar en mi codigo con los datos que recibi de esa URL o endpoint
        console.table(data); // Muestro este array de objetos (antes un JSON) por la consola
    })

    // Si se produjo un error en la conexion o el parseo, lo vemos
    .catch(error => console.error(error));


/*================
    fetch()
==================

fetch() es una funcion incorporada y nativa de los navegadores modernos que permite realizar peticiones HTTP de forma asincronia usando promesas

Forma parte de las Web APIs proporcionadas por el navegador, no parte del lenguaje JavaScript en si

Fue introducida como parte del Fetch API para reemplazar al viejo y complejo XMLHttpRequest

    - Devuelve un objeto Promise que se resuelve con un objeto Response
    - Usa el estandar HTTP: Metodo como GET, POST, PUT, DELETE, etc
    - Funciona bien con async/await
    - Es mas limpia y moderna que XMLHttpRequest
    - Soporta CORS, headers, envio de JSON, etc


Sintaxis basica
    - url (string): La URL a la que queremos hacer la solicitud
    - options (opcional): Objeto que especifica configuracion adicional como metodo, cabeceras, cuerpo, etc

    fetch (url, options)
        .then(response => {
            // Respuesta cruda del servidor    
        })
        .catch(error => {
            // Error de red o fallo total    
        })


Importante
    - fetch() solo rechaza la promesa en errores de red reales (sin internet, servidor caido, etc)
    - No rechaza codigos de error HTTP (404 o 500), por eso debemos revisar el response.ok


=================
    Response
=================

La promesa devuelta por fetch() se resuelve con un objeto Response que tiene:
    .ok             booleano (true si el status esta entre 200 y 299)
    .status         Codigo HTTP (200, 404)
    .statusText     texto del estado (OK, Not Found)
    .headers        cabeceras HTTP de la respuesta
    .json(), .text(), .blob(), .formData() para leer el contenido de la respuesta
*/

const contenedorDatos = document.getElementById("contenedor-datos");
const urlTodos = "https://jsonplaceholder.typicode.com/todos";

/*
// 1. Realizamos la conexion a la url
fetch(urlTodos) 
    // 2. Parseamos el contenido del cuerpo de la respuesta
    .then(response => response.json()) 

    // 3. Trabajamos con el contenido que recien parseamos
    .then(data => {
        console.table(data);

        // Arrancamos a armar una lista HTML para anexarle codigo de forma dinamica
        let htmlTodos = "<ul>";

        data.forEach(lista => {
            htmlTodos += `<li>Id: ${lista.id} / Titulo: ${lista.title}</li>`
        });

        htmlTodos += "</ul>";
        
        contenedorDatos.innerHTML = htmlTodos;
    })

    .catch(error => console.error("Error al obtener datos: ", error));
*/

/*=====================
    async/await
=======================

async/await es una sintaxis mas simple (o syntactic sugar) para trabajar con Promesas.
Introducida en ECMAScript 2017 (ES8) que permite escribir codigo asincrono como si fuera codigo sincrono

El objetivo es hacer el manejo de la asincronia mas legible, estructurado y facil de depurar

    - La palabra clave async se usa para declarar una funcion asincronica, la cual siempre devuelve una Promesa

    - La palabra clave await pausa la ejecucion de la funcion async hasta que una Promesa sea resulta (fulfilled) o rechazada (rejected)


- await bloquea la ejecucion dentro de la funcion async pero NO bloquea el hilo principal
- Las funciones async siempre devuelven una promesa
- await tambien puede usarse con funciones que no retornan promesas


Ventajas del async/await

    - Mas legible y secuencial
    - Mejor manejo de errores con try/catch
    - Ideal para flujos largos y complejos de asincronia
*/

function obtenerTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => {
            console.table(data)
            
            // Recien a partir de aca empezamos con todo el codigo que trabaje con los datos
        })
        .catch(error => console.error(error));
}

obtenerTodos();



async function obtenerAlbumes() {
    try {
        // await espera a que fetch termine y guarda el resultado en response
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    
        // await espera a parsear el cuerpo de la respuesta HTTP
        const data = await response.json();
    
        console.table(data);

    // El bloque catch captura errores de cualquier promesa esperada con await
    } catch (error) {
        console.error(error);
    }
}

obtenerAlbumes();


/*=====================
    try...catch
=======================

try...catch es una estructura de control utilizada para capturar y manejar errores que ocurren durante la ejecucion de bloques de codigo.

Esta tecnica forma parte del manejo de excepciones en JavaScript. Su objetivo es evitar que errores inesperados detengan la ejecucion del progrma y en su lugar permitir manejar dichos errores de forma controlada


////////////
// Sintaxis

try {
    // Bloque de codigo que podria lanzar errores

} catch (error) {
    // Codigo par manejar el error


} finally {
    // (Opcional) Codigo que se ejecuta siempre con o sin error
}



Que errores puede capturar? try...catch captura errores de tiempo de ejecucion (runtime) como
    - Acceso a variables no definidas
    - Llamadas a funciones inexistentes
    - Errores lanzados con throw
    - Problemas en funciones JSON.parse(), etc
    - NO captura errores de sintaxis porque estos impiden que el codigo se ejecute


////////////
// Como funciona?

    1. El bloque try se ejecuta normalmente

    2. Si ocurre algun error dentro del try, se detiene inmediatamente la ejecucion y pasa al bloque catch

    3. El objeto de error (por convencion llamado "error" o "e") contiene informacion como

        .name:      tipo de error (TypeError, ReferenceError, etc)
        .message:   mensaje descriptivo
        .stack:     pila de llamadas (stack trace)

    4. El bloque finally, si existe, siempre se ejecuta


////////////
// Por que no usar try...catch en exceso?

    - Puede ocultar errores reales si no se maneja correctamente
    - Tiene un coste de rendimiento, especialmente en bucles
    - Es mejor usarlo en secciones donde hay riesgo real de errores (I/O, parsing, red, etc)
*/

try {
    const resultado = 10 / 0;
    console.log(resultado); // Infinity

    // Lanzamos un nuevo error manualmente
    throw new Error("No podes dividir entre 0 che!!");

} catch (e) {
    console.error("Ocurrio un error: ", e.message); // Ocurrio un error:  No podes dividir entre 0 che!!

} finally {
    console.log("Esto se ejecuta siempre");
}