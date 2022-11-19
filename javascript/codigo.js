alert("Bienvenido al sistema de apuestas de un hipodromo, podras observar en el siguiente listado los caballos disponibles");
const caballos = [
    {nombre: 'Caballo Marron' , velocidad: 40},
    {nombre: 'Caballo Blanco' , velocidad: 45},
    {nombre: 'Caballo Negro' , velocidad: 48},
    {nombre: 'Caballo Dorado' , velocidad: 50},
    {nombre: 'Caballo Dragon' , velocidad: 55}
];
const mensajes = [
   { nombre: 'Caballo Marron', msg: "el clasico de las carreras "},
   { nombre: 'Caballo Blanco', msg: "el del poderoso Simon Bolivar "},
   { nombre: 'Caballo Negro', msg: "el poderoso pero infalible "},
   { nombre: 'Caballo Dorado', msg: "el mas brillante de todos "},
   { nombre: 'Caballo Dragon', msg: "Acaso no se vieron Jake Long? "}
]
alert('Los caballos disponibles en este momento son ' + caballos.length)
const n_random = Math.floor(Math.random() * caballos.length);
const v_random = Math.floor(Math.random() * caballos.length);
const nombre_caballo = caballos[n_random].nombre;
const velocidad_caballo = caballos[v_random].velocidad;
let opcion =prompt("puedes seleccionar entre los 5 mejores caballos disponibles en el hipodromo \n \n * Caballo Marron introducir numero 1 \n * Caballo Blanco introducir numero 2 \n * Caballo Negro introducir numero 3 \n * Caballo Dorado introducir numero 4 \n * Caballo Dragon introducir numero 5"); // introducir un valor a la variable opciones
alert('Seleccionaste al caballo numero ' + opcion);
while (opcion <1 || opcion >5 ){ // si la opcion no es valida, se repite
    alert("La opcion introducida no esta disponible, Porfavor volver a introducir un numero correcto");
    opcion=prompt("puedes seleccionar entre los 5 mejores caballos disponibles en el hipodromo \n \n * Caballo Dorado introducir numero 1 \n * Caballo Marron introducir numero 2 \n * Caballo Blanco introducir numero 3 \n * Caballo Negro introducir numero 4 \n * Caballo Dragon introducir numero 5");
}
function carrera(opcion){
   const caballo = caballos[opcion-1] 
   const { nombre, velocidad } = caballo
   const mensaje_encontrado = mensajes.find( (item)=>{
      return item.nombre === caballo.nombre
   } )
   alert(`El ${nombre} ${mensaje_encontrado.msg}, con una velocidad de ${velocidad} km/h`)
   if(nombre == nombre_caballo )  // cuando opciones es igual a resultado el ganador sera la opcion seleccionada
      alert("Ha ganado el " + nombre_caballo + ' con una velocidad de ' + velocidad_caballo); 
   else // en caso contrario te dira el verdadero ganador
      alert("Has perdido :( el ganador es " + nombre_caballo + ' con una velocidad de ' + velocidad_caballo + "km/h");
}
console.log(carrera(opcion));

