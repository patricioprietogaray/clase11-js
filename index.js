// SPREAD OPERATOR
// con slice se duplica el array, en cambio con una asignacion (con =)
// apunta a la misma lista y si se modifica

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
console.log(estudiantesOriginal);

// demuestro que apunta a lo mismo en memoria
console.log(estudiantesOriginal);
const copiaEstudiantesOriginal = estudiantesOriginal;
console.log(`estudiante original ${estudiantesOriginal}`);
console.log(`asigno a copia estudOrig y modifico la copia`);
copiaEstudiantesOriginal.pop();
console.log(`estudiante original ${estudiantesOriginal}`);

// es por ello que se debe usar el spread operator (...)
// de la siguiente manera
console.log(estudiantesOriginal);
const copiaEstOrigSpreadOp = [...estudiantesOriginal, 'puedo agregar mas...'];
console.log(`estudiante original ${estudiantesOriginal}`);
console.log(`estudiante copia spread operator ${copiaEstOrigSpreadOp}`);


