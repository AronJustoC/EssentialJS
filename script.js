console.log("Todo lo necesario de JS");
/*
#############-----Topic to learn--------##############
1. const-let[]
2. arrow functions[]
3. map[]
4. filter[]
5. reduce[]
6. destructuring[]
7. template strings[]
8. includes[]
9. desetructuracion de objetos[]
10. desetructuracion de arreglos[]
11. ...rest[] agrupa en un array el resto de elementos de un array utilizando desestructuracion
12. ...spred[]
13. async-await[]
14. promise.all[]
 */

//01. const-let-var
/////////////////////////Ejercicio01 ------> verificamios const-let-var en un scope
/*
const nameConst = "aron";
let nameLet = "aron";
var nameVar = "aron";


function verifyScope() {
  console.log(nameConst); //se puede acceder a nameConst en el scope definido por la funcion verifyScope
  console.log(nameLet);//se puede acceder a nameLet en el scope definido por la funcion verifyScope
  console.log(nameVar);//se puede acceder a nameVar en el scope definido por la funcion verifyScope
}
verifyScope();
*/

/////////////////////////Ejercicio02 ------> verificamios const-let-var en un scope
/*
function testScope() {
  if (true) {
    var x = 1;
    const y = 2;
    let z = 3;
  }
  console.log(x);//Solo se puede acceder a x en el scope definida por la funcion testScope
  console.log(y);//solo se puede acceder a y en el scope definido por el if{}
  console.log(z);//solo se puede acceder a z en el scope definido por el if{}
}
testScope();
*/

/////////////////////////Ejercicio03 ------> Reasignacion de variables
/*
const a = 5;
let b = 10;
var c = 15;

a = 6; // ¿Qué pasa con la variable 'a'?
b = 20; // ¿Qué pasa con la variable 'b'?
c = 25; // ¿Qué pasa con la variable 'c'?

console.log(b, c, a); //la varible a no se reasigna porque es una constante y nos dara un error
*/

///////////////////////Ejercicio04 ------> Hoisting de variables
/*
console.log(a);//Imprime undefined
console.log(b);//Se genera un error porque b no esta declarada
console.log(c);//Se genera un error porque c no esta declarada

var a = 5;
let b = 10;
var c = 15;
*/

//Ejercicio05 ------> Declaracion de variables e inicializacion
/*
const a;
let b;
var c;

console.log(a);//Genera un error porque a no esta declarada esta es necesariamente indispensable para [const]
console.log(b);
console.log(c);
*/

/////////////////////////Ejercicio06  ------> Escope Global vs Local
/*
var globalVar = "global";
let globalLet = "global";
const globalConst = "global";

function checkGlobalScope() {
  var localVar = "local";
  let localLet = "local";
  const localConst = "local";

  console.log(globalVar); //se puede acceder a globalVar en el scope definido por la funcion checkGlobalScope
  console.log(globalLet); //se puede acceder a globalLet en el scope definido por la funcion checkGlobalScope
  console.log(globalConst); //se puede acceder a globalConst en el scope definido por la funcion checkGlobalScope
  //console.log(localVar, localLet, localConst); // Fuera de funcion nos da error
}

checkGlobalScope();

console.log(globalVar); //se puede acceder a globalVar en el scope global
console.log(globalLet); //se puede acceder a globalLet en el scope global
console.log(globalConst); //se puede acceder a globalConst en el scope global
*/

///////////////////////Ejercicio07 ------> Mutabilidad de objetos declarados con const
/*
const person = { name: "Aron", age: 28 };
person.age = 29; // Sepuede modificar las propiedades de un objeto declarado con const
console.log(person);
//No se puede reasignar el objeto: person = {name: "Aron", age: 29}; Genera un error
*/

///////////////////////Ejercicio08 ------> Reasignacion dentro de bucles
/*
for (var i = 0; i < 10; i++) {
  console.log(i); //i es accesible globalmente por usar var
}

console.log("Var fuera del bucle: ", i); // i es accesible globalmente por usar var te muestra el ultimo valor de i

for (let j = 0; j < 10; j++) {
  console.log(j); //j es accesible solo dentro del bloque por usar let
}
//console.log("Let fuera del bucle: ", j); // j no es accesible globalmente por usar let genera un error

for (const k = 0; k < 10; k++) {
  // console.log(k); nos da error porque no se puede reasignar una constante
}
*/

///////////////////////Ejercicio09 ------> Variables dentro de funciones anidadas
/*
function outerFunction() {
  const outerConst = "Outer";
  let outerLet = "Outer";
  var outerVar = "Outer";

  function innerFunction() {
    console.log(outerConst); //se puede acceder a outerConst en el scope definido por la funcion innerFunction
    console.log(outerLet); //se puede acceder a outerLet en el scope definido por la funcion innerFunction
    console.log(outerVar); //se puede acceder a outerVar en el scope definido por la funcion innerFunction
  }
  innerFunction();
}
outerFunction();
*/

/////////////////////////Ejercicio10 ------> Temporary Dead Zone (TDZ) con let y const
/*
{
  //console.log(myVar); //undefined
  //console.log(myLet); //Genera un error
  //console.log(myConst); //Genera un error

  var myVar = "Hoisted";
  let myLet = "Not Hoisted";
  const myConst = "Not Hoisted";
}
*/



//02. Arrow functions
/////////////////////////Ejercicio01 ------> Sintaxis de arrow functions
/*
//Funcion normal
function suma(a, b) {
  return a + b;
}
console.log("Funcion normal", suma(1, 2));

//Arrow function
const sumaArrow = (a, b) => a + b;
console.log("Arrow funcion", sumaArrow(1, 2));
*/

/////////////////////////Ejercicio02 ------> Arrow functions de una sola linea
/*
const square = (num) => num * num; //La forma general es (parametros) => expresion no se nucesita return porque es implicito
console.log(square(5));
*/

/////////////////////////Ejercicio03 ------> Filtrar numeros pares con arrow functions
/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = numbers.filter((num)=> num % 2 === 0);
console.log(evenNumbers);
*/

/////////////////////////Ejercicio04 ------> Arrow functions mapear numeros al cuadrado
/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const squareNumbers = numbers.map((num) => num * num);
console.log(squareNumbers);
*/

/////////////////////////Ejercicio05 ------> Combinar funciones
/*
const double = (num) => num * 2;
const triple = (num) => num * 3;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = numbers.map((num) => double(triple(num)));
console.log(result);
*/

/////////////////////////Ejercicio06 ------> Arrow functions como parametro
/*
const applyOperation = (array, operation, number) => {
  return array.map((item) => operation(item, number));
};

const add = (a, b) => a + b;
const numbers = [1, 2, 3, 4, 5];
const result = applyOperation(numbers, add, 6);
console.log(result);
*/

/////////////////////////Ejercicio07 ------> Uso de this en arrow functions
/*
const person = {
  name: "Aron",
  greet: () => `Hola, mi nombre es ${person.name}`,
};

console.log(person.greet());
*/

/////////////////////////Ejercicio08 ------> Reducir un array con arrow functions
/*
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accum, num) => accum + num, 0);
console.log(sum);
*/

/////////////////////////Ejercicio09 ------> Crear una funcion de orden superior con arrow functions
/*
const multiplier = (x) => (y) => x * y;
const double = multiplier(2);
console.log(double(5));
*/
/////////////////////////Ejercicio10 ------> Arrow funcion y promesas
/*
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve("Datos cargados"); }, 2000);
  });
};

fetchData().then((message) => console.log(message));
*/


//03 map
/////////////////////////Ejercicio01 ------> map eleva al cuadrado los elementos de un array
/*
const numbers = [1, 2, 3, 4, 6];
const squareNumbers = numbers.map((number) => number * number);
console.log(squareNumbers);

/////////////////////////Ejercicio02 ------>  convertir nombres a mayusculas

const names = ["aron", "jose", "luis", "maria"];
const upperCasaNames = names.map((name) => name.toUpperCase());
console.log(upperCasaNames);

/////////////////////////Ejercicio03 ------>  formatear precios

const prices = [20, 30, 40, 50, 60];
const formattedPrices = prices.map((price) => `$${price}.00`);
console.log(formattedPrices);

/////////////////////////Ejercicio04 ------>  De array a objetos utilazndo map

const products = ['pizza', 'hamburguesa', 'hotdog', 'tacos'];
const pricesOfProducts = [12, 20, 15, 10];
const productsObjects = products.map((product, index) => ({
  id: index,
  name: product,
  price: `$${pricesOfProducts[index]}.00`,
}));
console.log(productsObjects);

/////////////////////////Ejercicio05 ------>  Multiplicar elementos de un array por su indice

const numbersIndex = [1, 2, 3, 4, 5];
const multiplyNumbers = numbersIndex.map((number, index) => number * index);
console.log(multiplyNumbers);

/////////////////////////Ejercicio06 ------> Extraer propiedades de un objeto

const productsObjects2 = [
  { name: 'pizza', price: 12 },
  { name: 'hamburguesa', price: 20 },
  { name: 'hotdog', price: 15 },
  { name: 'tacos', price: 10 },
];
const pricesOfProducts2 = productsObjects2.map((product) => product.price);
const namesOfProducts2 = productsObjects2.map((product) => product.name);
console.log(namesOfProducts2);
console.log(pricesOfProducts2);

/////////////////////////Ejercicio07 ------>  Reducir palabras a su longitud
const words = ['hello', 'world', 'javascript', 'html', 'css'];
const lengthWords = words.map((word) => word.length);
console.log(lengthWords);

/////////////////////////Ejercicio08 ------>  Agregar valores constantes a un array
const numbers2 = [1, 2, 3, 4, 5];
const addNumbers = numbers2.map((number) => number + 15);
console.log(addNumbers);

*/

//04 filter
/*
/////////////////////////Ejercicio01 ------> Filtrar numeros pares
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumeers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumeers);

/////////////////////////Ejercicio02 ------> Filtrar por numero de palabras
const words = ['hello', 'world', 'javascript', 'html', 'css'];
const wordsWithFiveLetters = words.filter((word) => word.length === 4);
console.log(wordsWithFiveLetters);

/////////////////////////Ejercicio03 ------> Filtrar los usuarios de un objeto que sean mayores de edad
const users = [
  { name: 'Aron', age: 28 },
  { name: 'Jose', age: 17 },
  { name: 'Luis', age: 15 },
  { name: 'Maria', age: 30 },
];

const adults = users.filter((user) => user.age >= 18);
console.log(adults);

/////////////////////////Ejercicio04 ------> Filtrar productos en stock
const products = [
  { name: 'pizza', stock: 20 },
  { name: 'hamburguesa', stock: 0 },
  { name: 'hotdog', stock: 3 },
  { name: 'tacos', stock: 5 },
];

const productsInStock = products.filter((product) => product.stock > 0);
console.log(productsInStock);

/////////////////////////Ejercicio05 ------> Calificaciones aprovatorias
const grades = [10, 5, 8, 3, 9, 7, 6];
const passGrades = grades.filter((grade) => grade >= 7);
console.log(passGrades);

/////////////////////////Ejercicio06 ------> Nombres que empiezan con la letra A
const names = ['Aron', 'Jose', 'Luis', 'Maria', 'Ana', 'Antonio'];
const namesStartWithA = names.filter((name) => name.startsWith('A'));
console.log(namesStartWithA);

/////////////////////////Ejercicio07 ------> Palabras con longitud especifica

const words2 = ['hello', 'world', 'javascript', 'html', 'css'];
const wordsWithFiveLetters2 = words2.filter((word) => word.length === 5);
console.log(wordsWithFiveLetters2);

/////////////////////////Ejercicio08 ------> Objetos con un valor especifico
const products2 = [
  { id: 1, name: 'pizza', price: 12, available: true },
  { id: 2, name: 'hamburguesa', price: 20, available: false },
  { id: 3, name: 'hotdog', price: 15, available: true },
  { id: 4, name: 'tacos', price: 10, available: false },
];

const availableProducts = products2.filter((product) => product.available === true);
console.log(availableProducts);
*/

//05 reduce
/////////////////////////Ejercicio01 ------> Sumar los elementos de un array
/*
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accum, number) => accum + number, 0);
console.log(sum);

/////////////////////////Ejercicio02 ------> Concatenar elementos de un array

const words = ['JavaScript', 'is', 'awesome'];
const sentence = words.reduce((accum, word) => `${accum} ${word}`);
console.log(sentence);

/////////////////////////Ejercicio03 ------> Producto de numeros
const numbers2 = [1, 2, 3, 4, 5];
const productOfNumbers = numbers2.reduce((accum, number) => accum * number, 1);
console.log(productOfNumbers);

/////////////////////////Ejercicio04 ------> Agrupar elementos
const products = [
  { name: 'pizza', category: 'comida' },
  { name: 'hamburguesa', category: 'comida' },
  { name: 'hotdog', category: 'comida' },
  { name: 'tacos', category: 'comida' },
  { name: 'coca cola', category: 'bebida' },
  { name: 'sprite', category: 'bebida' },
  { name: 'agua', category: 'bebida' },
];

const groupedProducts = products.reduce((accum, product) => {
  //Desestructurar la categoria del producto
  const { category } = product;
  //Si la categoria no existe en el acumulador, inicializarla como un array vacio
  if (!accum[category]) {
    accum[category] = [];
  }
  //Agregar el producto ala categoria correspondiente
  accum[category].push(product);
  return accum;
}, {});

console.log(groupedProducts);

////////////////////Ejercicio05  -----> Encontrar el maximo valor de un array

const numbers3 = [10, 520, 20, 15, 6, 8, 9, 45];
const max = numbers3.reduce((accum, currentValue) => {
  return currentValue > accum ? currentValue : accum;
}, numbers[0]);

console.log(max);

//////////////////Ejercicio06  ------> Convertir un array de objetos a un objeto
const people = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];
const peopleById = people.reduce((accum, person) => {
  accum[person.id] = person;
  return accum;
}, {});
console.log(people);
console.log(peopleById);

////////////////////Ejercicio07 Eliminar duplicados de un array
const numbers4 = [1, 2, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9, 9, 7, 5, 6, 2, 4, 3];
const singleNumbers = numbers4.reduce((accum, currentValue) => {
  if (!accum.includes(currentValue)) {
    accum.push(currentValue);
  }
  return accum;
}, []);
console.log(singleNumbers);

///////////////////Ejercicio08 -------> Crear una cadena de caracteristicas a partir de un array
const words3 = ['Hola', 'como', 'estas,', 'todo', 'bien?']
const textOfTheWords = words3.reduce((accum, currentValue) => `${accum} ${currentValue}`)
console.log(textOfTheWords)

//////////////////Ejercicio09 -----> Aplanar un array de array
const arrays = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
const flattened = arrays.reduce((accum, currentValue) => accum.concat(currentValue), []);
console.log(flattened);

//////////////////Ejercicio10  -------> Contar la frecuencia de elementos de un array
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];
const frequency = fruits.reduce((accum, fruit) => {
  accum[fruit] = (accum[fruit] || 0) + 1; //(accum[fruit] || 0) tomara 0 si aun no esta en accum
  return accum;
}, {});
console.log(frequency)

///////////////Ejercicio11 ------> Convertir un array de objetos en un objeto
const people1 = [
  { id: 1, name: 'Jhon' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Jack' },
];

const peobleById = people1.reduce((accum, person) => {
  accum[person.id] = person;
  return accum
}, {});

console.log(peobleById)

*/


//6. destructuring
/*
//Ejerciocio01 Desestructuracion de arrays
const numbers = [1, 2, 3, 4, 5, 6];
const [first, second, third] = numbers;
console.log(first);
console.log(second);
console.log(third);

//Ejercicio02 Desestructuraicion de objetos
const person = {
  nombre: 'Jhon',
  edad: 30,
  ciudad: 'New York'
};

const { nombre, edad, ciudad } = person;
console.log(nombre);
console.log(edad);
console.log(ciudad);

//Ejercicio03 Desestructuracion con valores predeterminados
const person1 = {
  name: 'Jane',
  age: 25
};
const { name, age, city = 'Unknown' } = person1;
console.log(name);
console.log(age);
console.log(city);

//Ejercicio04  Desestructuracion anidada
const person2 = {
  nombre2: 'Alice',
  address2: {
    city2: 'Los Angeles',
    zip2: '90001'
  }
};

const { nombre2, address2: { city2, zip2 } } = person2;
console.log(nombre2);
console.log(city2);
console.log(zip2);

//Ejercicio05 Desestructuracion en parametros de funcion
const displayPerson = ({ name, age, alias }) => {
  console.log(`Name: ${name}, Age: ${age}, Alias: ${alias}`);
};

const person3 = { name: 'Bod', age: 40, alias: 'Boby' };
displayPerson(person3);

//Ejercicio06 Desestructuracion de objetos con el operador rest
const person4 = {
  name4: 'Charle',
  age4: 34,
  city4: 'Chicago'
};

const { name4, ...rest } = person4;
console.log(name4);
console.log(rest);

//Ejercicio07 Desestructuracion de arrays utilizando operador rest
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [first1, second2, ...rest1] = numbers3;
console.log(first);
console.log(rest1);

//Ejercicio08 Intercambio de variables usando desestructuracion
let a = 1;
let b = 3;
[a, b] = [b, a];
console.log(a);
console.log(b);

//Ejercicio09  Desestructuracion de parametros de funcion con valores predeterminados
const greet = ({ name = 'Guest', age = 18 } = {}) => {
  console.log(`Hello ${name}. You are ${age} years old.`);
};

greet({ name: 'Dave', age: 22 });
greet();

//Ejercicio10 Desestructuracion de arrays anidadas
const nestedArray = [1, [2, 3], 4];
const [first10, [second10, third10], fourth] = nestedArray;
console.log(first10);
console.log(second10);
console.log(third10);
console.log(fourth);
*/


//Includes[]
/*
//Ejercicio01 verificar si un array contiene un elemento especifico
const fruits = ['apple', 'banana', 'orange'];
const hasBanana = fruits.includes('banana')
console.log('The fruits array includes banana: ', hasBanana);

//Ejercicio02 verificar si una cadena contiene una cadena
const sentence = 'The quick brown fox jumps over the lazy dog';
const hasFox = sentence.includes('fox');
console.log('The sentence has word fox?', hasFox);

//Ejercicio03 verificar si un array de numeros contiene un numero especifico
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const hasThree = numbers.includes(3);
console.log('The array numbers has the number three: ', hasThree);

//Ejercicio04 verificar si un array de objetos contiene un objeto con una propiedad en especifico
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

const hasBod = users.map(user => user.name).includes('Bob')
console.log(' Does the array users include an objet with the property name equal to Bob ? ', hasBod);

//Ejercicio05 verificar si una cadena contiene un caracter especifico
const word = 'supercalifragilisticexpialidocious';
const hasX = word.includes('x');
console.log('The bools array includes x: ', hasX);

//Ejercicio06 verificar si un array de booleanos contiene un valor true
const bools = [false, false, false, false, false];
const hasTrue = bools.includes(true);
console.log('The bools array includes true: ', hasTrue);

//Ejercicio07 verificar si un array de strings contiene una cadena especifica(case insensitive)
const colors = ['Red', 'Green', 'Blue'];
const hasGreen = colors.map(color => color.toLocaleLowerCase()).includes('green');
console.log('The colors array includes Green (case insensitive)', hasGreen)

//Ejercicio08 verificar si una cadena contiene una subcadena especifica en una posicion especifica
const phrase = 'Hello, world';
const hasWorldAtPosition7 = phrase.includes('world', 7);
console.log('The phrase contains "world" starting at position', hasWorldAtPosition7);
*/

//11. ...rest[]
/*
//Ejercicio01: Sumar todos los numeros
function sum(...numbers) {
  return numbers.reduce((accum, currentNumber) => accum + currentNumber, 0);
}
console.log(sum(1, 2, 4, 5, 6, 7));

//Ejercicio02 Concatenar cadena
function concatenateString(...strings) {
  return strings.join(' ');
}
console.log(concatenateString('Hola', 'mundo', 'desde', 'JavaScript'));

//Ejercicio03 Crear una array de objetos
function createOjects(...names) {
  return names.map((name, index) => ({ id: index + 1, name }));
}
console.log(createOjects('Aron', 'Jose', 'Luis'));

//Ejercicio04 Filtrar numeros mayores que un valor dedo
function filterGreaterThan(value, ...numbers) {
  return numbers.filter(num => num > value);
}
console.log(filterGreaterThan(7, 10, 3, 5, 3, 67, 5, 34, 455, 41, 13));

//Ejercicio05 Combinar arrays
function combineArrays(...arrays) {
  return arrays.flat();
}
console.log(combineArrays([1, 3], [3, 4], [5, 6]));

//Ejercicio06 Obtener el resto de los elementos
function getRest(first, second, ...rest) {
  return rest;
}
console.log(getRest(1, 2, 3, 4, 5, 6));

//Ejercicio07 Crear un objeto con propiedades dinamicas
function createObjects(name, age, ...properties) {
  const obj = { name, age };
  properties.forEach((property, index) => {
    obj[`property${index + 1}`] = property;
  });
  return obj;
}
console.log(createObjects('Aron', 28, 'Developer', 'JavaScript', 'Neovim'));

//Ejercicio08 Sumar numeros y concatenar cadena
function sumAndConcatenate(...args) {
  let sum = 0;
  let concatenatedString = '';

  args.forEach(arg => {
    if (typeof arg == 'number') {
      sum += arg;
    } else if (typeof arg == 'string') {
      concatenatedString += arg + ' ';
    }
  });
  return { sum, concatenatedString: concatenatedString.trim() };
}

console.log(sumAndConcatenate(1, 'Hola', 2, 'Mundo', 4));
*/


//12. ...spread[]
/*
//Ejercicio01 Combinar arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);

//Ejercicio02 Clonar un array
const originalArray = [1, 2, 3];
const clonedArray = [...originalArray];
console.log(clonedArray);

//Ejercicio03 Combinar Objetos
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);

//Ejercicio04 Clonar un Objeto
const originalObject = { a: 1, b: 2 };
const clonedObject = { ...originalObject };
console.log(clonedObject);

//Ejercicio05 Pasar argumentos a una funcion
const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;
console.log(sum(...numbers));

//Ejercicio06 Crear una copia de un array y agregar nuevos elementos
const arrayX = [4, 5, 6, 7];
const newArray = [1, 2, 3, ...arrayX, 8];
console.log(newArray);

//Ejercicio07 Remover duplicados de un array
const arrayWithDuplicates = [1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 6]; array1
const uniqueArray = [...new Set(arrayWithDuplicates)];
console.log(uniqueArray);
*/


//13. async-await[]
//Ejercicio01 Funcion asincrona basica
/*
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncFunction() {
  console.log('Inicio');
  await delay(100); //Esperar 2 segundos
  console.log('Fin');
}

asyncFunction();

//Ejercicio02 Llamar una API
async function fetchData() {
  try {
    const response = await fetch('http://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error', error);
  }
}

fetchData();

//Ejercicio03 Manejo de errores
async function fetchDataWithErrorHandling() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/invalid-url');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error', error);
  }
}

fetchDataWithErrorHandling();

//Ejercicio04 Ejecutar funciones asincronas en paralelo
async function fetchPost(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.json();
}

async function fetchMultilePosts() {
  const postsIds = [1, 2, 3];
  const promises = postsIds.map(id => fetchPost(id));
  const posts = await Promise.all(promises);
  console.log(posts);
}

fetchMultilePosts();

//Ejercicio05 Cadena de promesas
async function fetchUserData(userId) {
  const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await userResponse.json();

  const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  const posts = await postsResponse.json();

  return { user, posts };
}

async function displayUserData() {
  const userData = await fetchUserData(1);
  console.log(userData);
}

displayUserData();

//Ejercicio06 Retraso en una funcion asincrona
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedMessage() {
  console.log('Mensaje inicial');
  await delay(3000);
  console.log('Mensaje de despedida despues de 3 segundos');
}

delayedMessage();
*/

//14. promise.all[]
/*
//Ejercicio01 Ejecutar multiples promesas en paralelo
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const promise1 = delay(1000).then(() => 'Promesa 1 resuelta');
const promise2 = delay(2000).then(() => 'Promesa 2 resuelta');
const promise3 = delay(3000).then(() => 'Promesa 3 resuelta');

Promise.all([promise1, promise2, promise3]).then(results => {
  console.log(results);
}).catch(error => {
  console.error('Error', error);
});

//Ejercicio02 Obtener datos de multiples APIs

const fetchPost = id => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => response.json());

Promise.all([fetchPost(1), fetchPost(2), fetchPost(3)]).then(posts => {
  console.log(posts);
}).catch(error => {
  console.error('Error', error);
});

//Ejercicio03 Obtener datps de multiples URLs
const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

Promise.all(urls.map(url => fetch(url).then(response => response.json())))
  .then(results => {
    console.log(results);
  }).catch(error => {
    console.error('Error', error);
  });

//Ejercicio04 Obtener datos de multiples APIs y Combinar
const fetchUser = id => fetch(`https://jsonplaceholder.typicode.com/users/${id}`).
  then(response => response.json());
const fetchPosts1 = userId => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).
  then(response => response.json());

Promise.all([fetchUser(1), fetchPosts1(1)]).then(([user, posts]) => {
  console.log('User:', user);
  console.log('Posts:', posts);
}).catch(error => {
  console.error('Error', error);
})

//Ejercicio05 Ejecutar multiples promesas y manejar errores individualmente
const promiseUno = Promise.resolve('promesa 1 resuelta');
const promiseDos = Promise.resolve('promesa 2 resuelta');
const promiseTres = Promise.resolve('promesa 3 resuelta');

Promise.allSettled([promiseUno, promiseDos, promiseTres]).then(results => {
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(`Promesa ${index + 1} resuelta:`, result.value);
    } else {
      console.error(`Promesa ${index + 1} rechazada:`, result.reason);
    }
  });
});
*/

//14. Manejo de archivos JSON

//01 crear un objeto
const obj = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 }
];

//Convertir esa cadena de objetos en una cadena JSON
const jsonString = JSON.stringify(obj);
console.log(jsonString);

//Convertir un a cadena Json a un objeto
const objet = JSON.parse(jsonString);
console.log(objet);

//################# SOLO EN EL TERMINAL ##############################
//Leer un archivo json 
/*
const fs = require('fs');
fs.readFile('data.json', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const obj = JSON.parse(data);
  console.log(obj);
})
*/
//Escribir un array de objetos
/*
const fs = require('fs');
const obj01 = [
  { id: 1, name: "Arito", age: 25 },
  { id: 2, name: "Boby", age: 30 },
  { id: 3, name: "Carlitos", age: 35 }
];

const jsonString01 = JSON.stringify(obj01, null, 2);

fs.writeFile('data.json', jsonString01, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Archivo JSON guardado')
})
*/

//leer y procesar archivo de texto 
const fs = require('fs').promises;

async function countWords(inputFile, outputFile) {
  try {
    const content = await fs.readFile(inputFile, 'utf-8');
    const words = content.split(/\s+/).filter(Boolean);
    const totalWods = words.length;

    const result = `El archivo contiene ${totalWods} palabras.`;
    await fs.writeFile(outputFile, result);
    console.log('Resultado guardado en: ', outputFile);
  } catch (err) {
    console.error(err.message);
  }
}

countWords('text.txt', 'result.txt');
