// Select the input element and the paragraph
const colorInput = document.getElementById("colorInput");
const colorValue = document.getElementById("colorValue");

// Add an event listener to the input
colorInput.addEventListener("input", function() {
    // Get the selected color value
    const selectedColor = colorInput.value;

    // Update the background color of the document body
    document.body.style.backgroundColor = selectedColor;

    // Update the paragraph text with the selected color
    colorValue.textContent = "Selected Color: " + selectedColor.toUpperCase();
});
