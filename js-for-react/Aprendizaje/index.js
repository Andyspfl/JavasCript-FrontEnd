// console.log("Hola mundo");


// Funciones basicas
// function hello() {
//     return function () {
//         return "Hello world"
//     }
// }

// console.log(hello()())

// esto se conoce bastante como programacion funcional.


// Parametros en las funciones:

// function hello(name) {
//     return `Hello ${name}`
// }

// console.log(hello("mundo"));
// console.log(hello("mundo 1"));
// console.log(hello("mundo 2"));
// console.log(hello("mundo 3"));

// pero no solamente se puede pasar un parametro
// function add(x,y) {
//     return x + y
// }

// console.log(add(1,2));
// console.log(add(1,2));
// console.log(add(1,2));
// console.log(add(1,2));
// console.log(add(1,2));


// Cuando no pasamos o nos olvidamos de pasar algun parametro, se nos devuelve un NaN

// function add(x,y){
//     if( y === undefined){
//         y= 0
//     }
//     return x+ y
// }

// console.log(add(1,2));

// Por suerte podemos asignar valores por defecto a los parametros de una funcion

// function add(x=1, y=20) {
//     return x + y
// }

// console.log(add(1,2));
// console.log(add(1,2));
// console.log(add(1,2));


// OBJETOS EN JAVASCRIPT

// const user = {
//     // a estos se les conoce como propiedades
//     name: "Ryan",
//     lastname: "perez",
//     age: 30,
//     address: {
//         contry: 'colombia',
//         city: 'Bogota',
//         street: 'main street 123'
//     },
//     friends: ['brandon', 'elena'],
//     active: true,
//     // A este se los conoce como metodos
//     sendMail: function () {
//         return 'sending email...'
//     }
// }

// La primera forma de acceder es por la notacion de punto:

// console.log(user.name);
// console.log(user.lastname);
// console.log(user.age);
// console.log(user.address.city);
// console.log(user.sendMail());


// Supongamos que tenemos dos variables

// const name = 'laptop';
// const price = 300;

// podemos crear un objeto con estas variables

// const newProduct = {
//     name: name,
//     price: price
// }

// console.log(newProduct);


// hay una forma mas facil de asignar estas variables a un objeto

// const name = 'laptop';
// const price = 300;

// const newProduct= {
//     name,
//     price
// }

// MANIPULACION DEL DOM

// La idea principal de js es poder manipular el dom, es decir, poder cambiar el contenido de una pagina web


// un srcipt.js puede alterar el index.html

// si nosotros queremos ver el titulo del documento podemos ejecutar en la consola:
// document.title   Nos dara el nombre de la pagina

// Nosotros tambien podemos crear a document para crear elementos de html:
// document.createElement('h1')

// Podremos guardarlo en una cosntante por ejemplo:
// title = document.createElement('h1')

// console.log(title);

// Esto realmente es un elemento, ahora lo aniadiremos al cuerpo de la pagina

// const title = document.createElement('h1')
// title.innerText = "Hola mundo desde js" // Esto es para agregar texto al elemento

// document.body.appendChild(title)

// // Ahora por ejemplo creamos un button

// const button = document.createElement('button')
// button.innerText = "Click me"

// // Event handlers, se los conoce como eventos, son funciones que se ejecutan cuando algo sucede
// button.addEventListener('click', function () {
//     console.log("Hola mundo");
//     // En este caso en lugar de imprimir un texto por consola podemos alterar el title
//     title.innerText = "Texto actualizado con addEventListener"
//     alert("Texto actualizado")
// })

// document.body.append(button)


// OBJETOS COMO PARAMETROS

// const user = {
//     name: "Ryan",
//     lastname: "perez"
// }

// function printInfo(user) {
//     return `<h1>Hola ${user.name}</h1>`
// }
// console.log(printInfo(user));

// document.body.innerHTML = printInfo(user)


// DESTRUCTURAR UN OBJETO

// const user = {
//     name: "Ryan",
//     lastname: "perez"
// }
// function printInfo({name}) {
//     return "<h1>Hola " + name + "</h1>"
// }

// tambien con lastname
// const user = {
//     name: "Ryan",
//     lastname: "perez"
// }
// function printInfo({lastname}) {
//     return "<h1>Hola " + lastname + "</h1>"
// }


// Tambien podemos guardar los valores en variables
// const user = {
//     name: "Ryan",
//     lastname: "perez"
// }
// function printInfo(user) {
//     const {name, lastname} = user;

//     return "<h1>Hola " + name + "</h1>"
// }

// FUNCIONES ANONIMAS

// En js no es necesario que las funciones tengan un nombre, por ejemplo:
// console.log(function () {
//     return "Starting ..."
// });

// // es algo que se usa bastante al momento de trabajar con eventos

// const button = document.createElement('button')
// button.innerText = "Click me"

// button.addEventListener('click', function () {
//     alert("clicked")
// })

// document.body.append(button)

// // FUNCIONES FLECHA

// // asi se veria una funcion normal:
// function add(){
//     return 1 + 2
// }
// // asi se veria una funcion flecha
// const add = () => {
//     return x + y
// }

// Ahora veamos una funcion flecha dentro de una funcion
// const button = document.createElement('button')
// button.innerText = "Click me"

// button.addEventListener('click', () => {
//     alert("clicked")
// })

// document.body.append(button)

// // Una forma mas simple de crear estas funciones es la siguiente
// const showText = () => 'Hola mundo'
// const showNumber = () => 10
// const showBoolean = () => true
// const showArray = () => [1, 2, 3]

// console.log(showText());
// console.log(showNumber());
// console.log(showBoolean());
// console.log(showArray());

// // Podemos notar que tendriamos un error de sintaxis al intentar hacer esto con un objeto, ya que confundiria las {} con el cuerpo de la funcion, entonces usamos () cubriendo el objeto
// const showObject = () => ({name: "Ryan"})
// console.log(showObject());


// RETURN EN FUNCIONES FLECHA
// const button = document.createElement('button')
// const isAuthorized = true;
// button.addEventListener('click', () => {
//     if (isAuthorized) {
//         alert("Esta autorizado")
//     }
//     else {
//         alert("No esta autorizado")
//     }
// })

// algo mas practico es usar el return en lugar de un else
// const button = document.createElement('button')
// button.innerText = "Click me"

// // Podemos utlizar la propiedad style para cambiar el color del boton
// button.style = 'background-color: blue; color: white'

// // otra forma seria con la interpolacion de cadenas
// background = 'blue'
// color = 'red'

// button.style = `background:${background}; color: ${color}`


// const isAuthorized = true;
// // Este tambien nos sirve para poder interpretar codigo
// // A esto se le llama operador ternario, lo que hace es evaluar una expresion y si es verdadera devuelve el primer valor, si es falsa devuelve el segundo valor
// button.style = `background:${isAuthorized ? background : color}; color: ${color}`


// button.addEventListener('click', () => {
//     if (isAuthorized) {
//         return alert("Esta autorizado")
//     }
//     else {
//         return alert("No esta autorizado")
//     }
// })
// document.body.append(button)

// ARREGLOS METODOS Y FUNCIONES

// Una forma de recorrer una arreglo es asi, pero esta es la forma mas basica y nos lleva muchas lineas de codigo
// const names = ['ryan', 'brandon', 'elena', 'mike']
// for (let i = 0; i< names.length; i++){
//     const element = names[i]
//     console.log(element);
    
// }

// // Una forma mas eficiente para recorrer un arreglo es con el metodo foreach
// names.forEach(function (name) {
//     console.log(name);
// })

// // En react se usa mas el metodo map
// const newNames = names.map(function (name) {
//     return `Hola ${name}`
// })
// console.log(names);
// // cuando usamos el metodo map, este nos devuelve un nuevo arreglo, por lo que podemos guardarlo en una variable
// console.log(newNames);

// // Tambien podemos usar el metodo find, este nos devuelve el primer elemento que cumpla con la condicion
// const nameFound = names.find(function (name) {
//     if(name === 'joe'){
//         return name
//     }
// })
// console.log(nameFound);
// // si buscamosun elemento que no existe, nos devolvera undefined

// // Otro metodo que podemos usar el filter, este nos devuelve un nuevo arreglo con los elementos que cumplan con la condicion

// const newNames = names.filter(function (name) {
//     if (name !== "Ryan") {
//         return name
//     }
// })

// console.log(newNames);

// const names = ['ryan', 'brandon', 'elena', 'mike']
// const newNames = ["joe", "jane"]

// console.log(names);
// console.log(newNames);
// console.log(names.concat(newNames));

// Una forma mas practica de concatenar arreglos es spread operator
// const names = ['ryan', 'brandon', 'elena', 'mike']
// const newNames = ["joe", "jane"]

// console.log([...names, ...newNames])


// // Esto no solamente funciona con arreglos, tambien funciona con objetos

// const user = {
//     name: "Ryan",
//     age: 30
// }

// const address= {
//     city: "Bogota",
//     country: "Colombia"
// }
// const userInfo = {
//     ...user,
//     ...address
// }

// console.log(user);
// console.log(address);

// console.log(userInfo);

// MODULOS EN JAVASCRIPT (ECMAScript)

// Los modulos son una forma de organizar nuestro codigo, es decir, dividir nuestro codigo en diferentes archivos
// Supongamos que creamos el archivo add.js, con el codigo:
// function add(x,y){
//     return x + y
// }

// Ahora utilizaremos una sintaxis de exportacion que es import 

import {add} from './add.js'
console.log(add(1,2));

// al inicio nos dara error por que en la parte de html tenemos que agregar un type="module" en el script, esto es para que el navegador sepa que estamos trabajando con modulos

// Ahora en el archivo add.js, podemos exportar varias cosas, no solamente funciones, tambien podemos exportar variables, constantes, objetos, etc

// export function multiply(x,y) {
//     return x * y;
// }
//

// import { tile, active, hobbies } from './add.js'

// export const title = "I'm a title";
// export const active = true;
// export const hobbies = ['read', 'write', 'code'];

// Tambien podemos exportar un valor por defecto, esto se hace con la palabra default 
// export default title;

// import addModule from './add.js'
// console.log(addModule);


// el estandar de js es que la forma estandar es que al momento de importar un modulo se use.js, pero en react no es necesario, ya que react lo hace por nosotros, es por el estandar de js y de la web

// // 
// const person = {
//     name: "Ryan",
//     age: 30,
//     active: true,
//     hobbies: ['read', 'write', 'code'],
//     address: {
//         city: "Bogota",
//         country: "Colombia"
//     }
// }

// console.log(persona);

// // si nosotros quisieramos imprimir propiedades que no existen
// console.log(persona.undefined.city);


// if(person.location) {
//     console.log(person.location.city);
    
// }

// // de esa forma no nos daria error, pero si quisieramos hacerlo de una forma mas elegante, podriamos hacerlo con la siguiente forma
// console.log(persona.location?.city);


// Asincronismo en JavaScript
// En react vienve de un navegador y se comunica con un servidor, por lo que es importante saber como manejar el asincronismo en js

let data = fetch('https://jsonplaceholder.typicode.com/posts').then(function () {
    console.log('Finalizo la carga');
    
})


console.log(data);
// veriamos que nos devuelve una promesa, una promesa es un objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca

// sirve porque esto nos permite aprovechar los procesos asincronos, es decir, que no se bloquea el hilo principal de js

// incluso podriamos hacer que nos devuelva algo con repsonse

fetch(
    'https://jsonplaceholder.typicode.com/posts'
).then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data);
    data.forEach(function (post) {
        const li = document.createElement('li')
        li.innerText = post.title;
        ul.append(li);
    })
})



const ul = document.createElement('ul')
const li = document.createElement('li')

// para que funcion el async y await, tenemos que ponerle async a la funcion y await a la promesa

async function loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    data.forEach(function (post) {
        const li = document.createElement('li')
        li.innerText = post.title;
        ul.append(li);
    })
}
document.body.append(ul)