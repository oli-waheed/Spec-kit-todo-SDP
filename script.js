const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const validationMessage = document.getElementById('validation-message');
const taskList = document.getElementById('task-list');

const tasks = [];

function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.className = 'task-item';
    listItem.textContent = task.description;
    taskList.appendChild(listItem);
  });
}

function setValidationMessage(message, isError = false) {
  validationMessage.textContent = message;
  validationMessage.hidden = !message;
  validationMessage.classList.toggle('error', isError);
}

function clearTaskForm() {
  taskInput.value = '';
  setValidationMessage('');
  taskInput.focus();
}

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const description = taskInput.value.trim();

  if (!description) {
    setValidationMessage('Task cannot be empty.', true);
    taskInput.focus();
    return;
  }

  const newTask = {
    id: Date.now() + Math.random(),
    description
  };

  tasks.push(newTask);
  renderTasks();
  clearTaskForm();
});

renderTasks();
