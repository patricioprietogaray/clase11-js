// crear nuestras propias 
// versiones no mutables de pop, push, shift, 
// unshift con spread operator y slice
const nombres=['juan', 'pedro', 'maria', 'jose', 'nehuen', 'sebastian'];
console.log(`Lista original de nombres: ${nombres}.`);
let nuevito='PEPE';
console.log(`Agregar PEPE al principio`);
// const addFirstElement = (arrayArg, nuevoElem) => {
//     // clonar el array sin modificar
//     // el original, agregar un elemento al 
//     // principio y devolverlo
//     const arrayNuevo = [nuevoElem, ...arrayArg];
//     // devuelve o retorna
//     return arrayNuevo;
// };

// de forma mas sintetica la funcion addFirstElement se puede definir asi:
const addFirstElement = (arrayArg, nuevoElem) => [nuevoElem, ...arrayArg];

const elementosPrimeroNuevo = addFirstElement(nombres, nuevito);
console.log(elementosPrimeroNuevo);

/////////////////////////////
console.log(`Lista original de nombres: ${nombres}.`);
console.log(`Agregar PEPE al final`);
// const addLastElement = (arrayArg, nuevoElem) => {
//     // clonar el array sin modificar
//     // el original, agregar un elemento al 
//     // final y devolverlo
//     const arrayNuevo = [...arrayArg, nuevoElem];
//     // devuelve o retorna
//     return arrayNuevo;
// };

// sintetizar la funcion!!!!
const addLastElement = (arrayArg, nuevoElem) => [...arrayArg, nuevoElem];

const elementosUltimoNuevo = addLastElement(nombres, nuevito);
console.log(elementosUltimoNuevo);

///////////////////////
// elimino el primero (juan)
console.log(`Lista original de nombres: ${nombres}.`);
console.log(`Elimino a juan (el primero)`);

// const delFirstElement = (arrayArg) => {
//     // manipular array original 
//     // escojer los elementos con slice
//     const arrayNuevo = [...arrayArg].slice(1);
//     // devuelve o retorna
//     return arrayNuevo;
// };

const delFirstElement = arrayArg => arrayArg.slice(1);

const sinElPrimerElemento = delFirstElement(nombres);
console.log(sinElPrimerElemento);

// elimino el ultimo (sebastian)
console.log(`Lista original de nombres: ${nombres}.`);
console.log(`Elimino a sebastian (el ??ltimo)`);
// const delLastElement = (arrayArg) => {
//     // manipular array original 
//     // escojer los elementos con slice
    
    
//     // const arrayNuevo = [...arrayArg].slice(0,[...arrayArg].length-1);
//     // se puede simplificar:
//     const arrayNuevo = [...arrayArg].slice(0, -1);


//     // devuelve o retorna
//     return arrayNuevo;
// };

const delLastElement = arrayArg => arrayArg.slice(0,-1);

const sinElUltimoElemento = delLastElement(nombres);
console.log(sinElUltimoElemento);

////////