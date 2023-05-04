// DOM elements
const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const deadline = document.querySelector('#todo-deadline');
const priority = document.querySelector('#todo-priority');
const list = document.querySelector('#todo-list');

// Task list array
let tasks = [];

// Submit event listener for form
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Create new task object
  const task = {
    text: input.value,
    deadline: deadline.value,
    priority: priority.value
  };
  
  // Add task to array and sort tasks
  tasks.push(task);
  tasks.sort((a, b) => {
    if (a.priority === b.priority) {
      return a.deadline.localeCompare(b.deadline);
    } else {
      return (a.priority === 'high') ? -1 : 1;
    }
  });
  
  // Render updated task list
  renderTasks();
  
  // Reset form
  form.reset();
});

// Function to render task list
function renderTasks() {
  // Clear existing task list
  list.innerHTML = '';
  
  // Add each task to the task list
  for (const task of tasks) {
    const li = document.createElement('li');
    const text = document.createElement('span');
    text.classList.add('todo-text');
    text.textContent = task.text;
    li.appendChild(text);
    const deadline = document.createElement('span');
    deadline.classList.add('todo-deadline');
    deadline.textContent = task.deadline.replace('T', ' ');
    li.appendChild(deadline);
    const priority = document.createElement('span');
    priority.classList.add('todo-priority');
    priority.textContent = task.priority.charAt(0).toUpperCase() + task.priority.slice(1);
    li.appendChild(priority);
    list.appendChild(li);
  }
}
