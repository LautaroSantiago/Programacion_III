    
// console.log("hola mudo");
// var nombre;
// let edad = 25;
// let pi = 3.1416;


// console.log(nombre);
// console.log(edad);    
// console.log(pi);

// let numero = 42;
// let texto = "hola";
// let verdadero = true;
// let vacio = null;
// let indefinido;

// console.log(numero);
// console.log(texto);
// console.log(verdadero);
// console.log(vacio);
// console.log(indefinido);


// let x = 100+50;
// console.log(x);

// let a = 10;
// let b= 3;
// console.log(a+b/a-a*b);


////////// positivo
// let num = 0;
// if(num > 0){
//     console.log("numero positivo");
// }else if(num < 0){
//     console.log("numero negativo");    
// }else{
//     console.log("cero");        
// }

//comprobar edad
// let edad = parseInt(prompt("edad: "));
// console.log(edad);
// console.log(typeof(edad));


// if(edad >= 18){
//     console.log("mayor");        
// }else if(edad < 18 && edad >= 0){
//     console.log("menor");        
// }else{
//     console.log("invalido");        
// }


///     ///
// //comprobar conducir
// let edadLicencia = 25;
// let tieneLicencia = true;

// if(tieneLicencia && edadLicencia >=18){
//     console.log("puede");
// }
// if(!tieneLicencia || edadLicencia <=18){
//     console.log("no puede");
// }

///     /// togle o conmutador

// let estado = true;

// function alternarEstado(){
//     estado = !estado;
//     console.log("nuevo estado: ", estado);
// }

// alternarEstado();
// alternarEstado();
// alternarEstado();


// // // // Truthy Falsy

// let valorUno = 0; // 0 en un contexto booleano se sfalsy
// let valorUDos= "Hola"; //una cadena no vacia es un valor truthy

// console.log(!(valorUno));
// console.log(!(valorDos));

//OPERADORES TERNARIOS: if else de forma compacta
// let edad = 20;
// let mensaje = (edad >= 18) ? "mayor de edad" : "menor de edad" ;
// console.log(mensaje);
// //let mensaje = console.log((edad >= 18) ? "mayor de edad" : "menor de edad" );

// let temp = 11;
// let mensajeTemp = (temp > 25) ? "hace calor" : "hace frio";
// console.log(mensajeTemp);


//BUCLE FOR CLASICO
// for(let i = 0; i < 5; i++){
//     console.log("Iteracion: ", i);
// }

// for(let i = 1; i <= 3 ; i++){
//     console.log('\nTabla del ', i,":");
//     for(let j = 0; j <= 3; j++){
//         //console.log(i,"x",j, "=",(i*j));
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }

//WHILE
// let i = 0;

// while(i<5){
//     console.log(`iteracion ${i}`);
//     i++;
// }

//DO
// let j= 0;

// do{

//     console.log(`iteracion ${j}`);
// }while(j< 5);

//break(cortar) continue(satar) switch(estructura  opciones)

// ! → rojo (alertas/importante)
// ? → azul (preguntas/dudas)
// TODO → naranja (pendientes)
// * → verde (destacado)

// for(let i = 0; i < 10;  i++){
//     if(i === 5){ 
//         break;
//     }
//     console.log(`iteracion ${i}`);
// }

// for(let i = 0; i < 10; i++){
//     if(i % 2 === 0){
//         continue;
//     }

//     console.log(`n° impar ${i}`);
// }

let diaSemana = 4; 

switch (diaSemana) {
    case 1:
        console.log(`${diaSemana} lunes`);
        break;
    case 2:
        console.log(`${diaSemana} martes`);
        break;
    case 3:
        console.log(`${diaSemana} miercoles`);
        break;        
    case "4":
        console.log(`${diaSemana} juernes`);
        break;        
    case 4:
        console.log(`${diaSemana} jueves`);
        break;    
    case 5:
        console.log(`${diaSemana} viernes`);
        break;    
    case 6:
        console.log(`${diaSemana} sabado`);
        break;    
    case 7:
        console.log(`${diaSemana} domingo`);
        break;    
    default:
        console.log(`${diaSemana} no es un dia`);
        break;
}