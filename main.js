// Selecionando elementos do DOM
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Função para adicionar tarefa
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button class="deleteBtn" onclick="deleteTask(this)">X</button>`;
    taskList.appendChild(li);
    taskInput.value = '';
  } else {
    alert('Por favor, insira uma tarefa válida.');
  }
}

// Função para deletar tarefa
function deleteTask(taskElement) {
  taskElement.parentElement.remove();
}
