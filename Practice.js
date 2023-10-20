// Var
let name = "Isaac";
const age = 22;

function greet(userName) {
    return "Hello, " + userName + "!";
}

/*
Interacting with the DOM(Document Object Model)
The DOM represents the structure of a HTML document as a tree of objects. Each object corresponds to a part of the,
document, such as an element or an attribute.
*/
let heading = document.querySelector("hi");
heading.textContent = "New Heading";

// Event Listeners 
let button = document.querySelector("button");
button.addEventListener("click", function() {
    alert("Button clicked!");
});

