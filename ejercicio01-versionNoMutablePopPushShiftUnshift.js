// crear nuestras propias 
// versiones no mutables de pop, push, shift, 
// unshift con spread operator y slice
const nombres=['juan', 'pedro', 'maria', 'jose', 'nehuen', 'sebastian'];
console.log(`Lista original de nombres: ${nombres}.`);
let nuevito='PEPE';
console.log(`Agregar PEPE al principio`);
const addFirstElement = (arrayArg, nuevoElem) => {
    // clonar el array sin modificar
    // el original, agregar un elemento al 
    // principio y devolverlo
    const arrayNuevo = [nuevoElem, ...arrayArg];
    // devuelve o retorna
    return arrayNuevo;
};

const elementosPrimeroNuevo = addFirstElement(nombres, nuevito);
console.log(elementosPrimeroNuevo);

/////////////////////////////
console.log(`Lista original de nombres: ${nombres}.`);
console.log(`Agregar PEPE al final`);
const addLastElement = (arrayArg, nuevoElem) => {
    // clonar el array sin modificar
    // el original, agregar un elemento al 
    // final y devolverlo
    const arrayNuevo = [...arrayArg, nuevoElem];
    // devuelve o retorna
    return arrayNuevo;
};

const elementosUltimoNuevo = addLastElement(nombres, nuevito);
console.log(elementosUltimoNuevo);

///////////////////////
// elimino el primero (juan)
console.log(`Lista original de nombres: ${nombres}.`);
console.log(`Elimino a juan (el primero)`);

const delFirstElement = (arrayArg) => {
    // manipular array original 
    // escojer los elementos con slice
    const arrayNuevo = [...arrayArg].slice(1);
    // devuelve o retorna
    return arrayNuevo;
};

const sinElPrimerElemento = delFirstElement(nombres);
console.log(sinElPrimerElemento);

// elimino el ultimo (sebastian)
console.log(`Lista original de nombres: ${nombres}.`);
console.log(`Elimino a sebastian (el último)`);
const delLastElement = (arrayArg) => {
    // manipular array original 
    // escojer los elementos con slice
    const arrayNuevo = [...arrayArg].slice(0,[...arrayArg].length-1);
    // devuelve o retorna
    return arrayNuevo;
};

const sinElUltimoElemento = delLastElement(nombres);
console.log(sinElUltimoElemento);