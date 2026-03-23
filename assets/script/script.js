let tasksListCurrent = [
  { id: 1, description: "Comprar Insumos", check: false },
  { id: 2, description: "Realizar inventario", check: false },
  { id: 3, description: "Preparar Gondolas", check: false },
];

const tasksList = document.querySelector("#tasksListIn");
const btnAddTask = document.querySelector("#addTask");
const btnAddTaskDescription = document.querySelector("#input");
const total = document.querySelector("#total");
const realizadas = document.querySelector("#realizadas");

// Renderización Lista de Tareas
const renderTasks = () => {
  let template = "";
  for (let task of tasksListCurrent) {
    template += `<div class="liDiv">
    <li style="width: 80%;">${task.id} - ${task.description}</li> 
    <div class="btnDiv">
    <input onclick="checkTask(${task.id})" 
    class="checkbox" ${task.check ? "checked" : ""} 
    type="checkbox" id="checkbox${task.id}"
    /> 
    <button onclick="eraseTask(${task.id})" class="btnErase">❌</button></div></div>`;
  }
  tasksList.innerHTML = template;
};

// Evento para agregar nueva tarea
btnAddTask.addEventListener("click", function () {
  let newTask = {
    id: tasksListCurrent.length + 1,
    description: btnAddTaskDescription.value,
    check: false,
  };
  tasksListCurrent.push(newTask);
  renderTasks();
  renderTotal();
});

// Función de check de tareas

const checkTask = (id) => {
  const task = tasksListCurrent.find((task) => task.id == id);
  task.check = !task.check;

  renderTasks();
  renderRealizadas();
};

// Cuenta de los true

const renderRealizadas = () => {
  const count = tasksListCurrent.filter((task) => task.check).length;
  realizadas.innerHTML = `Realizadas: ${count}`;
};

// Función de borrado de tareas

const eraseTask = (id) => {
  const eraseTaskIndex = tasksListCurrent.findIndex((task) => task.id == id);
  tasksListCurrent.splice(eraseTaskIndex, 1);
  renderTasks();
  renderTotal();
  renderRealizadas();
};

// cuenta el total de tareas u objetos del array tasksLists

let renderTotal = () => {
  total.innerHTML = `Total: ${tasksListCurrent.length}`;
};

//Render Inicial
renderTotal();
renderTasks();
renderRealizadas();
