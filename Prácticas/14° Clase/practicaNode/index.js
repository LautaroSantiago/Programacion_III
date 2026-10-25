import express from 'express' // Voy a mi carpeta express dentro de node modules
import fs from 'fs' // importamos file system
// import {fs as FileSystem} from 'fs' // importamos file system con alias
import path from 'path' // importamos paths

const app = express(); // Inicializamos SV
const __dirname = import.meta.dirname; // es necesario importar desde aca por usar el type module de js

app.use(express.json());

app.get('/', (__, res) => { // usamos __ convencion de no utilizar req
    console.log('Hola mundo');
    
    const rutaArchivo = path.join(__dirname, 'index.html'); // __dirname guarda la ruta raiz (la ruta del DocumentRoot)
    
    fs.readFile(rutaArchivo, (err, data) => {
        if (err) {
            console.log('Error en el archivo: ', err);
            
            return res.status(402).send('Debiste haber pagado para ver este recurso.');
        }
        res.setHeader('Content-Type', 'text/html'); // Header para enviar PDF (por default la res usa text/html)
        return res.send(data); // Necesitamos a veces el return para cortar ahi mismo la iteracion y evitar que salgan 2 respuestas o algo asi en simultaneo
        
        // res.sendFile(rutaArchivo); // otra opcion
        
    });
});

const usuarios = [];

app.post('/crearUsuario', (req, res) => {
    console.log(req.body);
    
    // req.on('data', (chunk) => { // la idea es renderizar por partes o segmentar un objeto o algo asi
    //     console.log(chunk.toString());
    // });

    let {nombre, apellido, edad, password} = req.body;
    edad = parseInt(edad);

    usuarios.push({nombre, apellido, edad, password});
    console.log(usuarios);

});

app.listen(25565, () => console.log(`El servidor esta encendido!: http://localhost:25565`)); // Cuidado con los puertos que ya estan siendo usados (80, 443)