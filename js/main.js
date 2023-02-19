//----ok-------
//Variables
for(let turno = 1; turno <= 4; turno++){
    let nombre = prompt("Ingrese su nombre y Apellido");
    let mensaje = `Turno #${turno} para: ${nombre}`;
    alert(mensaje);
    }
    alert("No hay disponibilidad, intente mañana a partir de las 9am");
      

//Ciclo

for (let i = 0; i < 10; i++) {
  console.log(i);
}
//----ok-------




//Condicional
if (edad >= 18) {
  console.log('Eres mayor de edad');
} else {
  console.log('Eres menor de edad');
}

//Funciones
function saludar(nombre) {
  console.log(`Hola ${nombre}, ¿cómo estás?`);
}

saludar(nombre);