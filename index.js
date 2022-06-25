var miPrimerArreglo=["hola", 1,  true, [ "a",   "b",   "c"]  ];
// posiciones         [0]    [1]  [2]  [3][0]  [3][1]  [3][2]  

console.log(miPrimerArreglo[3][2]);
// arrary[posicionArrayContenedor][posicionArrayContenido];

var electrodomesticos=['lavarropa','heladera','microondas'];
console.log(electrodomesticos);
console.log(`el arreglo tiene ${electrodomesticos.length} elementos`);
console.log(`elemento 0: ${electrodomesticos[0]}`);
console.log(`elemento 1: ${electrodomesticos[1]}`);
console.log(`elemento 2: ${electrodomesticos[2]}`);
console.log(`**********************************`);
console.log(`mutacion de arreglos o edicion`);
console.log(`cambio el elemento 0: ${electrodomesticos[0]} como Cocina`);
electrodomesticos[0]='Cocina';
// en la posicion o elemento se le asigna un nuevo valor
console.log(`elemento 0: ${electrodomesticos[0]}`);
console.log(`elemento 1: ${electrodomesticos[1]}`);
console.log(`elemento 2: ${electrodomesticos[2]}`);

// Métod push (agregar) y pop eliminar (lifo last in first out)

const estudiantes = ['Martin', 'Patricia', 'Fernando'];
console.log(estudiantes);
// agrego elemento al final
estudiantes.push('Pepe');
console.log(estudiantes);
// elimino el ultimo elemento del array
estudiantes.pop();
console.log(estudiantes);

// filo?
// unshift es push en el primer elemento (0)
//  shift es pop en el primer elemento(0)
console.log("uso de unshift (push elemento 0) y shift es pop del elem 0");
console.log(estudiantes);
estudiantes.unshift('primitivo');
console.log(estudiantes);
estudiantes.shift();
console.log(estudiantes);

///// SLICE para no modificar el array original se hace una copia y se 
// trabaja con el duplicado.
const estudiantesOriginal = ['Matias', 'Brian', 'Julieta', 'Gaston', 'Anita', 'Daiana'];
const estudiantesNorte = estudiantesOriginal.slice(0,2);
// DESDE EL 0 HASTA EL 2 SIN INCLUIRLO
const estudiantesSur=estudiantesOriginal.slice(2);
console.log(estudiantesOriginal);
console.log(estudiantesNorte);
console.log(estudiantesSur);
estudiantesNorte.pop();
console.log(estudiantesNorte);
console.log(estudiantesOriginal);
estudiantesSur.shift();
console.log(estudiantesSur);

// UNA BUENA PRACTICA ES DUPLICAR LOS ARRAYS



