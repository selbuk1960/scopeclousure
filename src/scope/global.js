
var a; // declarar
var b = 'b'; // declarar y asignar
b = 'bb'; // reasignando 
var a = 'aa'; // redeclarar y asignar


// Global Scope
var fruit = 'Apple';

function bestFruit() {
    console.log(fruit);
}

bestFruit(); // Apple

function countries(){
    country = 'Colombia';
    console.log(country);
}

countries(); // Colombia