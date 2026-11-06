// Importamos express
import express from "express"; // Usamos la sintaxis ESM descrita en el package.json

// Creamos una aplicacion de Express (Vamos a crear una instancia de aplicacion de Express)
const app = express(); // app contendra todos los metodos para crear un servidor con Express


//////////////////
// Endpoints (url + metodo HTTP + logica)
app.get("/", (req, res) => {
    res.send("Hola mundo desde Express.js!");
});

// Endpoint GET para obtener todos los usuarios de una BBDD
app.get("/api/users", (req, res) => {
    // 1. Nos conectamos a la BBDD y le pasamos la sentencia SELECT * FROM users

    // 2. Esperamos a que la BBDD nos devuelva los resultados y los guardamos en una variables (operacion asincronica) -> Esta BBDD nos devuelve los usuarios en forma de array de objetos

    // 3. Le devolvemos al usuario la respuesta en JSON con un codigo 200
    res.status(200).json(
        [
            { 
                nombre: "Lautaro",
                edad: 37
            },
            {
                nombre: "Franco",
                edad: 25
            },
            {
                nombre: "Luca",
                edad: 19
            },
            {
                nombre: "Renata",
                edad: 24
            }
        ]
    )
});

// Endpoint para crear usuarios
app.post("/api/users", (req, res) => {
    // 1. Recibimos los datos de un nuevo usuario desde un formulario HTML del cliente -> req.body

    // 2. Mando estos datos a la BBDD INSERT INTO users ...

    // 3. Si la insercion es exitosa en la BBDD, le devuelvo un 201 created y un mensaje "usuario creado"

    res.status(201).json({
        message: "Usuario creado exitosamente"
    })

});


app.get("/about", (req, res) => {
    res.send("Esta es la pagina About Us / Sobre nosotros");
});

app.get("/contact", (req, res) => {
    res.send("Esta es la pagina de Contact / Contacto");
})



// Escuchamos en el puerto 3000
const puerto = 3000;
app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`)
});

/*============================
    Explicacion de codigo
==============================

    - Importar Express: Primero traemos la libreria express al archivo

    - Creamos una aplicacion: Llamamos a la funcion express() que devuelve una instancia de una aplicacion

    - Definimos una ruta: Usamos app.get para definir que hacer cuando alguien visita la raiz de nuestro servidor. Aca simplemente respondemos "Hola mundo desde Express.js"

    - Escuchar en un puerto: Nuestro servidor Express esta escuchando en el puerto 3000 y listo para aceptar conexiones
*/