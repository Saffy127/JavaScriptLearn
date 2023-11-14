const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const task = taskInput.value;
    if (task) {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        taskList.appendChild(listItem); 
        taskInput.value = '';
    } else {
        alert('Please enter a task so We can add it to list. ');
    }
}
