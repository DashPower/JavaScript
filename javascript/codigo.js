let caballos

window.addEventListener('load', cargarData)

let opcion
const listaDatos = JSON.parse(localStorage.getItem('listaDatos') ?? '[]')

async function cargarData() {
   const respuesta = await fetch('/javascript/caballos.json')
   const data = await respuesta.json()
   caballos = data
}

function carrera(ganancia, perdida) {
   const n_random = Math.floor(Math.random() * caballos.length);
   const v_random = Math.floor(Math.random() * caballos.length);
   const nombre_caballo = caballos[n_random].nombre;
   const velocidad_caballo = caballos[v_random].velocidad;
   const caballo = caballos[opcion - 1]
   const { nombre, velocidad } = caballo
   if (nombre == nombre_caballo) { // cuando opciones es igual a resultado el ganador sera la opcion seleccionada
      Swal.fire({
         title: 'Congratulations',
         text: `Ha ganado el ${nombre_caballo} con una velocidad de ${velocidad_caballo}, tu premio es de ${ganancia}$`,
         icon: 'success',
         confirmButtonText: 'Cool'
      })
      perdida = 0
   }
   else {// en caso contrario te dira el verdadero ganador
      Swal.fire({
         title: 'Lo sentimos',
         text: `Has perdido :( el ganador es ${nombre_caballo} con una velocidad de ${velocidad_caballo}`,
         icon: 'error',
         confirmButtonText: 'Cool'
      });
      ganancia = 0
   }
   const datos = {
      nombre_caballo,
      velocidad_caballo,
      ganancia,
      perdida
   }
   if (listaDatos.length === 10) {
      listaDatos.shift()
      listaDatos.push(datos)
      localStorage.setItem('listaDatos', JSON.stringify(listaDatos))
   } else if (listaDatos.length < 10) {
      listaDatos.push(datos)
      localStorage.setItem('listaDatos', JSON.stringify(listaDatos))
   }
}
function clickCaballo(botoncito) {
   const id = botoncito.getAttribute('infoid')
   const caballo = caballos.find(item => item.id == id)
   nombre.innerText = caballo.nombre
   velocidad.innerText = caballo.velocidad
   carreras.innerText = caballo.carreras
   opcion = id
   if (informacionCollapse._isShown()) {
      informacionCollapse.hide()
      setTimeout(() => informacionCollapse.show(), 500)
   } else {
      informacionCollapse.show()
   }
}
function enviar() {
   const apuestaValor = apuesta.value
   const ganancia = apuestaValor * 2
   carrera(ganancia, apuestaValor)
}
function mostrarReporte() {

   cuerpoReporte.innerHTML = ''
   let gt = 0
   let pt = 0
   for (const item of listaDatos) {
      cuerpoReporte.innerHTML += `
         <tr>
            <td>${item.nombre_caballo}</td>
            <td>${item.velocidad_caballo}</td>
            <td>${item.ganancia}</td>
            <td>${item.perdida}</td>
         </tr>
      `
      gt += parseInt(item.ganancia)
      pt += parseInt(item.perdida)
   }

   gananciasTotales.innerText = gt
   perdidasTotales.innerText = pt

}
const informacionCollapse = new bootstrap.Collapse(informacion, {
   toggle: false
})