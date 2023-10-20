document.getElementById("addTodo").addEventListener("click", function () {
    // Get input value
    const todoText = document.getElementById("newTodo").value;

    // Add a delete button to the list item
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function(){
        li.remove();
    });
    li.appendChild(deleteBtn);

    // Add the list item to the todo list
    document.getElementById("todoList").appendChild(li);

    // Clear the input field
    document.getElementById("newTodo").value = "";
});