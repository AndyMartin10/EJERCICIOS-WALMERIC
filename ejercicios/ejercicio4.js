// Modifica el código a continuación que realiza una llamada GET a
// una API para recuperar una lista de tareas usando async/await .


// (() => {

// const getTodos = () => {

// return fetch('https://jsonplaceholder.typicode.com/todos/')

// .then(response => response.json())
// .then(json => console.log(json))
// .catch(error => console.log(error));
// }

// getTodos();
// })();

async function obtenerEmpleados() {

  const archivo = 'empleados.json';


  const resultado = await fetch(archivo);
  const datos = await resultado.json();
  console.log(datos);
}
obtenerEmpleados();