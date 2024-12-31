# Repositorio de Ejercicios de JavaScript

Este repositorio contiene ejercicios para ayudarte a aprender y dominar varios conceptos y técnicas de JavaScript. A continuación se encuentra una lista de los temas, con una breve explicación y ejemplos para guiar tu práctica.

## Temas a Aprender

### 1. **`const` vs `let` vs `var`**
   - **Teoría**: 
     - `var` tiene un alcance a nivel de función y puede ser redeclarada.
     - `let` tiene un alcance de bloque y no puede ser redeclarada en el mismo bloque.
     - `const` también tiene un alcance de bloque, pero debe ser asignada al momento de la declaración y no puede ser reasignada.
   - **Ejercicio**: Practica usando `const`, `let` y `var` en varios contextos para entender su alcance y la posibilidad de reasignación.

### 2. **Funciones Flecha (Arrow Functions)**
   - **Teoría**: 
     - Las funciones flecha proporcionan una sintaxis más corta para escribir funciones.
     - También enlazan léxicamente el valor de `this`, lo cual es importante cuando se trabajan con callbacks y manejadores de eventos.
   - **Ejemplo**: 
     ```javascript
     const add = (a, b) => a + b;
     ```

### 3. **`map`**
   - **Teoría**: 
     - `map` se utiliza para crear un nuevo array aplicando una función a cada elemento de un array.
   - **Ejemplo**:
     ```javascript
     const numbers = [1, 2, 3];
     const doubled = numbers.map(num => num * 2);
     ```

### 4. **`filter`**
   - **Teoría**: 
     - `filter` crea un nuevo array con los elementos que pasan una prueba implementada por una función.
   - **Ejemplo**:
     ```javascript
     const numbers = [1, 2, 3, 4];
     const evenNumbers = numbers.filter(num => num % 2 === 0);
     ```

### 5. **`reduce`**
   - **Teoría**: 
     - `reduce` se utiliza para acumular un solo valor a partir de un array aplicando una función a cada elemento.
   - **Ejemplo**:
     ```javascript
     const numbers = [1, 2, 3];
     const sum = numbers.reduce((acc, num) => acc + num, 0);
     ```

### 6. **Desestructuración (Destructuring)**
   - **Teoría**: 
     - La desestructuración permite extraer valores de arrays o propiedades de objetos en variables distintas.
   - **Ejemplo**:
     ```javascript
     const person = { name: "Alice", age: 25 };
     const { name, age } = person;
     ```

### 7. **Cadenas de Plantillas (Template Strings)**
   - **Teoría**: 
     - Las cadenas de plantillas (o literales de plantilla) permiten incrustar expresiones dentro de literales de cadenas usando `${}`.
   - **Ejemplo**:
     ```javascript
     const name = "Bob";
     const greeting = `Hello, ${name}!`;
     ```

### 8. **`includes`**
   - **Teoría**: 
     - `includes` verifica si un array o cadena contiene un elemento o subcadena específica.
   - **Ejemplo**:
     ```javascript
     const numbers = [1, 2, 3];
     console.log(numbers.includes(2)); // true
     ```

### 9. **Desestructuración de Objetos**
   - **Teoría**: 
     - Extraer valores de las propiedades de un objeto usando la sintaxis de desestructuración.
   - **Ejemplo**:
     ```javascript
     const person = { name: "Alice", age: 25 };
     const { name, age } = person;
     ```

### 10. **Desestructuración de Arreglos**
   - **Teoría**: 
     - Extraer elementos de un arreglo usando la sintaxis de desestructuración.
   - **Ejemplo**:
     ```javascript
     const numbers = [1, 2, 3];
     const [first, second] = numbers;
     ```

### 11. **`...rest` (Parámetros Rest)**
   - **Teoría**: 
     - El operador `rest` recoge todos los elementos restantes en un array cuando se hace desestructuración de un array o parámetros de una función.
   - **Ejemplo**:
     ```javascript
     function sum(...numbers) {
       return numbers.reduce((acc, num) => acc + num, 0);
     }
     console.log(sum(1, 2, 3, 4)); // 10
     ```

### 12. **`...spread` (Operador Spread)**
   - **Teoría**: 
     - El operador `spread` desempaqueta elementos de un array u objeto.
   - **Ejemplo**:
     ```javascript
     const arr1 = [1, 2];
     const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
     ```

### 13. **`async` / `await`**
   - **Teoría**: 
     - `async` y `await` simplifican el trabajo con código asincrónico. `async` hace que una función retorne una promesa, y `await` pausa la ejecución hasta que la promesa se resuelva.
   - **Ejemplo**:
     ```javascript
     async function fetchData() {
       const response = await fetch('https://api.example.com');
       const data = await response.json();
       return data;
     }
     ```

### 14. **`Promise.all`**
   - **Teoría**: 
     - `Promise.all` permite ejecutar varias promesas en paralelo y esperar a que todas se resuelvan.
   - **Ejemplo**:
     ```javascript
     const promise1 = fetch('https://api.example.com');
     const promise2 = fetch('https://api.example2.com');
     Promise.all([promise1, promise2])
       .then(responses => Promise.all(responses.map(res => res.json())))
       .then(data => console.log(data));
     ```

---

## Cómo Ejecutar los Ejercicios

1. Clona el repositorio:
   ```bash
   git clone https://github.com/AronJustoC/EssentialJS
