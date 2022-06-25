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
    return "retorno de informacion";
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

//////////////

const result = suma();
console.log(`El resultado es ${result}`);

function suma(a=1, b=1) {
    return a+b;
}

// ///////// hoistin o algo asi es cuando js permite
// que la funcion se "mueva hacia arriba" para
// permitir que se lea la funcion antes de ser
// llamada, con la funcion expresada no se da,
// por lo tanto tira error.

// const result01= suma();

// const suma = function () {
//     return 10;
// }

// funcion anónima
// solo funciona con un callback
// function () {
    // console.log("anonymous");
// }
// ej
// function () {
//     console.log("anonymous");
// }

const resta = (x, y) => {
    return x-y;
}

const potenciacionCuadrado = x => {
// como es un solo argumento no necesita parentesis
// const a = (arg1) .... >  const a = arg1 ....
    return x*x;
}

// otra forma de hacer lo mismo sería
const potenciacionCubo = z => z*z*z;
// sin {} y sin return en una misma linea

console.log(`2 al cuadrado es: ${potenciacionCuadrado(2)}`);
console.log(`2 al cubo es: ${potenciacionCubo(2)}`);

// si no se pasan argumentos entonces muestra la 
// funcion en pantalla

////////////////

let resultado05 = () => 3+4;
console.log(resultado05());

//ejemplos
// funcion normal

// function calcularAreaCirculo(radio) {
//     return 3.14 * radio**2;
//     // radio**2 es radio al cuadrado o radio*radio
// }

// arrow function
// const calcularAreaCirculo = (radio) => {
//     return 3.14 * radio**2;
//     // radio**2 es radio al cuadrado o radio*radio
// }


// arrow function simplificada
const calcularAreaCirculo = radio => 3.14*radio**2;

const area = calcularAreaCirculo(5);
console.log(area);


/////SALUDO
// funcion normal
// const saludar = function(nombre, momentoDelDia) {
//     const saludo = `Good ${momentoDelDia}, ${nombre}!`;
//     return saludo;
// }

// no se puede prescindir del return ni {} porque hay mas de una linea
const saludar = (nombre, momentoDelDia) => {
    const saludo = `Good ${momentoDelDia}, ${nombre}!`;
    return saludo;
}

const saludo = saludar('Patricio', 'Morning');
const saludo2 = saludar('Seba', 'Night');
const saludo3 = saludar('Nehuen', 'Afternoon');
const saludo4 = saludar('Marimer', 'Morning');

console.log(saludo);
console.log(saludo2);
console.log(saludo3);
console.log(saludo4);


///////ARREGLO o ARRAY
