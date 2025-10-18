// Select elements
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');

// Add task event
form.addEventListener('submit', addTask);

// Clear tasks 
clearBtn.addEventListener('click', clearTasks);

function addTask(e) {
  e.preventDefault();

  if(taskInput.value === '') {
    alert('Please add a task');
    return;
  }

  const li = document.createElement('li');
  li.className = 'collection-item';
  li.textContent = taskInput.value;

  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';
}
 // clear task 
function clearTasks() {
  taskList.innerHTML = '';
}




