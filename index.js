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
// solo funciona asignando una variable o constante
// function () {
    // console.log("anonymous");
// }
// ej
function () {
    console.log("anonymous");
}
// 30:00