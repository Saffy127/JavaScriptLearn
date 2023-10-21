const newTaskInput = document.getElementById("newTask");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Add a new task
addTaskButton.addEventListener("click", function() {
    const taskText = newTaskInput.value;
    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        newTaskInput.value = ""; // Clear the input
    }
});

// Use event delagation to mark a task as complete 
taskList.

