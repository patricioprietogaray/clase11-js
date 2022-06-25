// Datos compuestos:
// FUNCIONES DECLARADAS 
// Son funciones que se declaran y luego son llamadas

function funcionSinArgumentosNoDevuelve() {
    console.log("No Devuelve solo muestra!");
}

function funcionConArgumentosNoDevuelve(a, b) {
    console.log("muestro variable a: "+a);
    console.log("muestro variable b: "+b);
}

function funcionSinArgumentosDevuelve() {
    console.log("Devuelve y solo muestra!");
    return "retorno de informacion"
}

function funcionConArgumentosDevuelve(a, b) {
    console.log("Recibe argumentos y Devuelve!");
    console.log("muestro variable a: "+a);
    console.log("muestro variable b: "+b);
    return "retorno de informacion como suma a + b: "+(a+b);
}

function funcionConArgumentosDefault(a=10, b=20) {
    // si no paso argumentos a sera igual a 10
    // y b será igual a 20
    return a + b;
}

console.log("funcion sin argumentos y no devuelve: ");
funcionSinArgumentosNoDevuelve();
console.log("*************************");

console.log("funcion con argumentos y no devuelve: ");
funcionConArgumentosNoDevuelve(10, 20);
console.log("*************************");

console.log("funcion sin argumentos y devuelve: ");
let devuelve = funcionSinArgumentosDevuelve();
console.log("devuelve: "+devuelve);
console.log("*************************");

console.log("funcion con argumentos y devuelve: ");
let devuelve2= funcionConArgumentosDevuelve(10, 20);
console.log("devuelve: "+devuelve2);
console.log("*************************");

console.log("funcion con argumentos default: ");
let devuelve3= funcionConArgumentosDefault();
console.log("devuelve: "+devuelve3);
console.log("*************************");

// funciones EXPRESADAS
// Una funcion expresada se le asigna a una variable
// y no puede invocarse antes de su definicion

let resultado = function() {
    return 3+4;
}
// mostrar la funcion
console.log(resultado);
// muestra el resultado
// resultado lo tomo como el nombre
// de la funcion
const res = resultado();
console.log("3+7="+res);