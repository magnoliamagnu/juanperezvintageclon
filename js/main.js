// //----Preentrega numero 1/ 5 puntos-------
// //Variables
// for(let turno = 1; turno <= 4; turno++){
//     let nombre = prompt("Ingrese su nombre y Apellido");
//     let mensaje = `Turno #${turno} para: ${nombre}`;
//     alert(mensaje);
//     }
//     alert("No hay disponibilidad, intente mañana a partir de las 9am");
      

// //Ciclo

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// //----ok-------




// //Condicional
// if (edad >= 18) {
//   console.log('Eres mayor de edad');
// } else {
//   console.log('Eres menor de edad');
// }

// //Funciones
// function saludar(nombre) {
//   console.log(`Hola ${nombre}, ¿cómo estás?`);
// }

// saludar(nombre);



///------------------- Segunda preentrega---------------///

const lista = [];

let cantidad = Number(prompt("Ingresar cantidad"));

do {
    let articulos = {};
    let nombre = prompt("Ingresar articulos")
    articulos.nombre = nombre.toUpperCase()
    let precio = prompt("Ingresar Precio")
    articulos.precio = precio

    lista.push(articulos)
}while(lista.length != cantidad)

console.log(lista)

for(let item of lista){
    console.log(item.nombre + " " + item.precio)
}

//-----------------//

const numeros = [1,2,3];


console.log(numeros) 


const porDos = numeros.map( function(x){ return x*2} )

console.log(porDos)
console.log(numeros)

const nombres = ["Maria", "Paulette", "Paola", "Cristina"];
const longitud = nombres.map( nombre => nombre.length)
console.log(nombres)
console.log(longitud)

const carrito = [
    { producto: 'Camisa', precio: 1500},
    { producto: 'Remera', precio: 1200},
    { producto: 'Top', precio: 800},
    { producto: 'Vestido', precio: 2200},
    { producto: 'Pantalon', precio: 5500},
    { producto: 'Pollera', precio: 3000},
    { producto: 'Short', precio: 4500},
    { producto: 'Cuadros', precio: 20000},
];



const precios = carrito.map( item => item.producto + " - " + item.precio + " - iva - " + item.precio*1.21)
console.log(precios);


let total = 0;
carrito.forEach( item => total += item.precio)
console.log(total) 



let resultado = carrito.find(item => item.producto === 'Short')
console.log(resultado)  




