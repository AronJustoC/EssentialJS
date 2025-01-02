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



