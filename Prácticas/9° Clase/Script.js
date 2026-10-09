// * bucle for

const numeros = [1, 2, 3, 4, 5];

let suma  = 0;

for (let i = 0; i < numeros.length; i ++) {
    suma += numeros[i];
}
console.log(suma);//=15

// * buscar coincidencia comience por ban y terminar iteracion

const frutas= ["manzana", "uva", "banana", "pera"];

for (let i = 0; i < frutas.length; i++){
    if(frutas[i].startsWith("ban")){
        console.log(frutas[i]); //banana
        break;
    }
}

//* filtrar precios caros > 100

let componentesPCCaros = [];

const componentesPC = [
  { id: 1, nombre: "Procesador AMD Ryzen 7 5700X", precio: 190 },
  { id: 2, nombre: "Tarjeta Gráfica NVIDIA RTX 4060 Ti", precio: 399 },
  { id: 3, nombre: "Memoria RAM Corsair Vengeance 16GB (2x8GB) DDR4", precio: 45 },
  { id: 4, nombre: "Disco Sólido SSD Kingston NV2 1TB NVMe M.2", precio: 60 },
  { id: 5, nombre: "Placa Madre ASUS ROG Strix B550-F Gaming", precio: 145},
  { id: 6, nombre: "Fuente de Poder Corsair RM750e 750W 80+ Gold", precio: 101 },
  { id: 7, nombre: "Gabinete NZXT H5 Flow", precio: 89},
  { id: 8, nombre: "Refrigeración Líquida Cooler Master MasterLiquid 240", precio: 75 }
];

for (let i = 0; i < componentesPC.length; i++){
    if (componentesPC[i].precio > 100){
        componentesPCCaros.push(componentesPC[i]);
    }
}

console.table(componentesPCCaros); // ! presentacion consola ordena tablas
//console.log(componentesPCCaros);

// * blucle forEach no se puede usar breack continue

const colores = ["rojo","celeste","azulgrana"];

colores.forEach(color=>console.log(color)); //tipo lambda

// colores.forEach(function(color){
//     console.log(color);
// })

// * array con valores duplicados (*2)

const duplicados = [];

numeros.forEach(n => duplicados.push(n*2));

console.log(duplicados);

// * estudiantes aprobados 

const estudiantes = [
    {nombre: "Pancho", nota:2},
    {nombre: "Nacho", nota:5},
    {nombre: "Toto", nota:6},
    {nombre: "Pepe", nota:4},
    {nombre: "Juan", nota:8},
]

estudiantes.forEach(e=>{
    e.aprobado = e.nota >= 6 // true o false
});

console.table(estudiantes); // ! presentacion consola ordena tablas


// ? metodos funcionales ES5

// * map

//const nuevosValores = array.map(elemento=>elemento*2);

const cuadrados = numeros.map(num=>num*num);
console.log(cuadrados);

// transformar las edades en un hola tengo... años
const edades = [25, 30, 19, 48];
const edadesSaludos = edades.map(edad => `Hola, tengo ${edad} años`);
console.log(edadesSaludos);

// * extraer nombres estudiantes
const nombresEstudiantes = estudiantes.map(e => e.nombre);
console.log(nombresEstudiantes);

// * filter

const numerosPares = numeros.filter(num => num % 2 === 0);

console.log(numerosPares); // [2, 4]

console.log("5" == 5);  // true
console.log("5" === 5); // false
// * palabras largas
const palabras = ["hola", "chau", "asdasd", "KHUKYU"];

const palabrasLargas = palabras.filter(p => p.length > 5);

console.log(palabrasLargas); // ['asdasd', 'KHUKYU']

// * nota mayor a 4

const elegidos = estudiantes.filter(e => e.nota > 4);
console.table(elegidos);

// ? reduce() reduce array retorna valor  acumulado

const decenas = [10,20,30,40];
const sumaDecenas = decenas.reduce((total,num)=> total + num,0);

console.log(sumaDecenas);

const ventas = [
  { producto: "Zapatos", cantidad: 1, precio: 80 },
  { producto: "Remera", cantidad: 3, precio: 25 },
  { producto: "Campera", cantidad: 1, precio: 120 },
  { producto: "Medias", cantidad: 6, precio: 5 },
  { producto: "Gorra", cantidad: 2, precio: 15 }
];


// * Con return explícito
const totalVentas = ventas.reduce((suma, p) => {
  return suma + (p.precio * p.cantidad);
}, 0);

// // *  O sin llaves (return implícito)
//const totalVentas = ventas.reduce((suma, p) => suma + p.precio * p.cantidad, 0);

console.log(totalVentas); //370

// * find() findIndex()

const numerosRandom = [5,12,20,130,44,8];

const encontrado = numerosRandom.find(num=>num>10);
console.log(encontrado);

// * some() every()


// ? for...of p/cortar con coincidencias

for (const est of estudiantes){
    if (est.nota < 6){
        console.log(`${est.nombre} reprobo con un ${est.nota}`);
        break;
    }
}

const simbolos = ['₵', '¢', '₡'];
for (const simb of simbolos){
    if (simb === '฿') break;
    console.log(simb);
}

// ? iteracion en objetos

/*

    ! SELECCION DE ELEMENTOS

    -getElementById() seleccion por id o null 1° coincidencia
    -querySelectorAll()

*/

const titulo = document.getElementById("titulo");
console.log(titulo);
console.log(titulo.textContent);

