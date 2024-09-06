let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [
  "Ana",
  "Bruni",
];

console.log(estudiantes);

//el método push se utiliza para agregar un elemento al final del arreglo
estudiantes.push("Camila");

console.log(estudiantes);

estudiantes.push("Antonella");
console.log(estudiantes);

//el método sort se utilza para ordenar el arreglo
estudiantes.sort();
console.log(estudiantes);

let estConN = estudiantes.filter((elemento) => elemento.includes("n"));
console.log(estConN);

let borrado = estConN.pop();

console.log(estConN);
console.log(borrado);

//let transformado = JSON.stringify(estudiantes);

localStorage.setItem("listado", JSON.stringify(estudiantes));

console.log(localStorage.getItem("listado"));

let traidoLocal = JSON.parse(localStorage.getItem("listado"));

console.log("Luego de hacer JSON.parse: ");
console.log(traidoLocal);

function mostrarListado() {
  const listadoDiv = document.getElementById("mostrarListado");
  listadoDiv.innerHTML = ""; // Limpiar el div

  const lista = document.createElement("ul");
  estudiantes.forEach((estudiante) => {
    const listItem = document.createElement("li");
    listItem.textContent = estudiante;
    lista.appendChild(listItem);
  });
  listadoDiv.appendChild(lista);
}

mostrarListado();

document.getElementById("agregar").addEventListener("click", agregarEstudiante);
document.getElementById("order").addEventListener("click", ordenarEstudiante);
document.getElementById("delete").addEventListener("click", eliminarEstudiante);
document.getElementById("rangeFilter").addEventListener("click", filtrarNombres);

function agregarEstudiante(evento) {
  evento.preventDefault();
  const nombres = document.getElementById("nombres").value;
  if (nombres) {
    const existe = estudiantes.includes(nombres);
    if (!existe) {
      estudiantes.push(nombres);
      localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
      mostrarListado();
      document.getElementById("nombres").value = "";
    } else {
      alert("El estudiante ya existe");
    }
  }
}

function ordenarEstudiante(evento) {
  evento.preventDefault();
  estudiantes.sort();
  localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
  mostrarListado();
}

function eliminarEstudiante(evento) {
  evento.preventDefault();
  const indice = estudiantes.indexOf(document.getElementById('nombres').value);
  if (indice !== -1) {
    estudiantes.splice(indice, 1);
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
    mostrarListado();
    document.getElementById('nombres').value = '';
  } else {
    console.log('El estudiante no existe');
  }
}

function filtrarNombres(){
  const filtro = document.getElementById('filtro').value.toUpperCase();
  const listItems =document.getElementById('mostrarListado').getElementsByTagName('li');
  for (let i = 0; i < listItems.length; i++) {
  const texto = listItems[i].textContent.toUpperCase();
  if (texto.indexOf(filtro) > -1) {
    listItems[i].style.display = "block";
  } else {
    listItems[i].style.display = "none";
  }
  }
 }
