// http: El modulo http nos permite crear un servidor web sin necesidad de instalar nada adicional
const http = require("http"); // Importamos el modulo http para poder tener todas las funcionalidades para crear un servidor completo

// Creamos el servidor
const servidor = http.createServer((req, res) => {

    // Configuramos la respuesta
    res.statusCode = 200; // Codigo 200 significa que la peticion fue exitosa

    res.setHeader("Content-Type", "text/plain"); // Indicamos que responderemos con texto

    res.end("Hola mundo desde un servidor con el modulo http nativo de Node.js"); // Mensaje que enviamos al cliente (contenido en el cuerpo/body de la respuesta/response)
});


// Definimos el puerto y arrancamos el servidor
const puerto = 3000;
servidor.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});

/*============================
    Explicacion de codigo
==============================

    - Importar el modulo http: Esto nos da acceso a todas las funcionalidades necesarias para crear un servidor

    - Creamos un servidor: Con el metodo http.createServer para definir un servidor que escucha las solicitudes de los clientes y les responda

    - Definimos la respuesta del servidor: El servidor siempre respondera con el mensaje en texto plano "Hola mundo desde Node.js"

    - Escuchamos en un puerto: El servidor se ejecuta en el puerto 3000 (puede ser cualquier puerto libre) y muestra un mensaje en la consola cuando esta listo
*/