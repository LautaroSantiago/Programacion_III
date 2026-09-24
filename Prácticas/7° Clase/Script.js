
// * varible global fuera del bloque

let varibleGlobal ="soy global";

function mostrarGlobal(){
    console.log(varibleGlobal);
}

mostrarGlobal()
console.log(varibleGlobal); // ! fuera del bloque


// * varible local solo dentro de la funcion accesible

function mostrarLocal(){
    var localVar =  "soy local"
    console.log(localVar);
}

mostrarLocal();
// ! console.log(localVar); //no puede accederse fuera de la funcion


// * block scope o ambito de bloque (let const)

if (true) {
    let bloqueVar = "soy variable de bloque";
    console.log(bloqueVar);
}

// ! console.log(bloqueVar); // no se puede acceder fuera del bloque


// * fuction scope si se declaran dentro de una funcion no se acceden por fuera de esa funcion  pero no estan limitadas por bloques

function scopeFunction(){
    if (true) {
        var funcionVar = "soy variable var de funcion";
    }
    console.log(funcionVar);
}

scopeFunction();

// * block scope
function scopeBloque(){
    if (true) {
        let bloqueLet = "soy let de bloque";
        const bloqueConst = "soy const de bloque";
        console.log(bloqueLet); // ? aqui se puede
        console.log(bloqueConst); // ? aqui se puede
    }

    // console.log(bloqueLet); // ! no puede salir del bloque
    // console.log(bloqueConst); // ! no puede salir del bloque
}

scopeBloque();

// * hoisting o elevacion se crean pero no se inicializan para evitar a error si se accede antes de inicializarla

console.log(elecadaVar); //tmb con let // ! NO rompe solo undefined
var elecadaVar = "soy var elevada";
console.log(elecadaVar);

//console.log(elecadaVarLet); // ! rompe
let elecadaVarLet = "soy var elevada";
console.log(elecadaVarLet);


var a = "a";
console.log(a);
var a = "b"; // 1 permite reasignacion
console.log(a);

// // / / / / / / / / /  /
// * usos funciones

function saludar(){
    console.log("hi");
}

saludar();
saludar();

function sumarNoReutilizable(){
    let resultado = 5 + 3;
    console.log("el resultado es ", resultado);
}

sumarNoReutilizable();

function sumar(a,b){
    let resultado = a + b;
    console.log("el resultado es ", resultado);
}

sumar(4,5); // ! pasando Argumentos

// * retornar un valor return

function multiplicar(a,b){
    return a*b;
}

let resultado = multiplicar(5,6);
console.log(resultado);


function saludar(nombre){ // parametro
    console.log(`hi ${nombre} !`);
}

saludar("mick");//argumento


// TODO tipos de funciones

// * FUNCION DECLARADA Basic Function funciones con nombre o necesite hoisting
test();  //invoco antes de declarar esto es por el entorno de ejecucion
function test(){ //declaro funcion
    console.log("test");
}
//test();

// ! * funcion expresada es la que esta dentro de una variable util para ser usada como argumento dentro de otra funcion

const funcionExpresada = function(){
    console.log("func expresada");
}

// * funcion anonima


