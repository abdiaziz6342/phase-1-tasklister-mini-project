document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form')
const formInput = document.querySelector('#new-task-description')
const taskList = document.querySelector('#tasks')

form.addEventListener('submit', function(event) {
  event.preventDefault()

  const task = document.createElement('li')

  task.textContent = formInput.value

  taskList.appendChild(task)

  formInput.value = ''
})
  
});
