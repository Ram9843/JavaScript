const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('#btn-clear');
const toggleBtn = document.querySelector('.toggle');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners() {
  form.addEventListener('submit', addTask);
  clearBtn.addEventListener('click', clearTasks);
  toggleBtn.addEventListener('click', toggleColor);
  taskList.addEventListener('click', removeTask);
}

function addTask(e) {
  e.preventDefault();
  if (taskInput.value === '') return;

  const li = document.createElement('li');
  li.className = 'collection-item';
  li.textContent = taskInput.value;

  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  taskList.appendChild(li);
  taskInput.value = '';
}

function clearTasks() {
  taskList.innerHTML = '';
}

function toggleColor() {
  main.classList.toggle('add-color');
}

//Task remove
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();
  }
}

//Event Delegation
const collection = document.createElement('ul');

function responding(){
  console.log('Responding')
}
for( var i= 1; i <= 10; i++){
  const newElement = document.createElement(li);
  newElement.textContent = "This is line" +i;
  newElement.addEventListener('click', responding)
  collection.appendChild(newElement);
}


function addTask(e) {
  e.preventDefault();
  if (taskInput.value === '') return;

  const li = document.createElement('li');
  li.className = 'collection-item';
  li.textContent = taskInput.value;

  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  taskList.appendChild(li);

  // Tasks Save in localStorage
  localStorage.setItem('task', taskInput.value);
  taskInput.value = '';
}


