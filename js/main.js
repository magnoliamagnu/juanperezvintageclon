// //----Preentrega numero 1/ 5 puntos-------
// //Variables
// for(let turno = 1; turno <= 4; turno++){
//     let nombre = prompt("Ingrese su nombre y Apellido");
//     let mensaje = `Turno #${turno} para: ${nombre}`;
//     alert(mensaje);
//     }
//     alert("No hay disponibilidad, intente mañana a partir de las 9am");

// const { types } = require("node-sass");

      

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

// const lista = [];

// let cantidad = Number(prompt("Ingresar cantidad"));

// do {
//     let articulos = {};
//     let nombre = prompt("Ingresar articulos")
//     articulos.nombre = nombre.toUpperCase()
//     let precio = prompt("Ingresar Precio")
//     articulos.precio = precio

//     lista.push(articulos)
// }while(lista.length != cantidad)

// console.log(lista)

// for(let item of lista){
//     console.log(item.nombre + " " + item.precio)
// }

// //-----------------//

// const numeros = [1,2,3];


// console.log(numeros) 


// const porDos = numeros.map( function(x){ return x*2} )

// console.log(porDos)
// console.log(numeros)

// const nombres = ["Maria", "Paulette", "Paola", "Cristina"];
// const longitud = nombres.map( nombre => nombre.length)
// console.log(nombres)
// console.log(longitud)

// const carrito = [
//     { producto: 'Camisa', precio: 1500},
//     { producto: 'Remera', precio: 1200},
//     { producto: 'Top', precio: 800},
//     { producto: 'Vestido', precio: 2200},
//     { producto: 'Pantalon', precio: 5500},
//     { producto: 'Pollera', precio: 3000},
//     { producto: 'Short', precio: 4500},
//     { producto: 'Cuadros', precio: 20000},
// ];



// const precios = carrito.map( item => item.producto + " - " + item.precio + " - iva - " + item.precio*1.21)
// console.log(precios);


// let total = 0;
// carrito.forEach( item => total += item.precio)
// console.log(total) 



// let resultado = carrito.find(item => item.producto === 'Short')
// console.log(resultado)  



///------------------- Tercera preentrega --------------///
const shopContent =document.getElementById("shopContent");
const verCarrito=document.getElementById("verCarrito");
const modalContainer =document.getElementById("modal-Container")


let carrito =[]
productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className ="card";
    content.innerHTML = `
    <img src="${product.img} ">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio}</p>
    `;

    shopContent.append(content);

    let comprar =document.createElement("button")
    comprar.innerText= "Comprar";
    comprar.className="comprar"

    content.append(comprar);

    comprar.addEventListener("click",() =>{
        carrito.push({
            id : product.id,
            img:product.img,
            nombre:product.nombre,
            precio:product.precio,
        })
        console.log(carrito);
    })
})

verCarrito.addEventListener("click",() => {
    const modalHeader = document.createElement("div");
    modalHeader.className ="modal-header"
    modalHeader.innerHTML =`
    <h1 class="modal-header-title">carrito.</h1>
    `;
    modalContainer.append(modalHeader);
    
    const modalbutton =document.createElement("h1");
    modalbutton.innerText ="X",
    modalbutton.className ="modal-header-button";

    modalHeader.append(modalbutton);



    carrito.forEach((product) => {
        let carritoContent =document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio}$</p>
        `;

        modalContainer.append(carritoContent)

    });  

    const total = carrito.reduce((acc,el) => acc + el.precio,0);

    const totalBuying = document.createElement("div");
    totalBuying.className ="total-content"
    totalBuying.innerHTML = `total a pagar: ${total}$`;
    modalContainer.append(totalBuying);
    
});