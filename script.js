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
//Ejercicio01 ------> verificamios const-let-var en un scope
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

//Ejercicio02 ------> verificamios const-let-var en un scope
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

//Ejercicio03 ------> Reasignacion de variables
/*
const a = 5;
let b = 10;
var c = 15;

a = 6; // ¿Qué pasa con la variable 'a'?
b = 20; // ¿Qué pasa con la variable 'b'?
c = 25; // ¿Qué pasa con la variable 'c'?

console.log(b, c, a); //la varible a no se reasigna porque es una constante y nos dara un error
*/

//Ejercicio04 ------> Hoisting de variables
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


