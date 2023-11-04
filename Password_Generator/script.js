// Get references to the input elements from the DOM 
const lengthInput = document.getElementById('length');
const useNumbersInput = document.getElementById('useNumbers');
const useSpecialInput = document.getElementById('useSpecial');
const generateButton = document.getElementById('generate');
const passwordDisplay = document.getElementById('passwordDisplay');

// Add an event listener to the button to execute when clicked
generateButton.addEventListener('click', function() {
    // Retrieve user-defined criteria from inputs
    const length = parseInt(lengthInput.value);
    const useNumbers = useNumbersInput.Checked;
    const useSpecial = useSpecialInput.checked;

    // Generate the password and display it
    passwordDisplay.value = generatePassword(length, useNumbers, useSpecial);
});

// Function to generate a random password based on the specified criteria
function generatePassword(length, useNumbers, useSpecial) {
    // Base character set (alphabets)
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const special = "!@#$%^&*()-_+=?/";

    // Start with the base character set
    let availableChars = charset;
    if (useNumbers) availableChars += numbers;
    if (useSpecial) availableChars += special;

    // Initialize an empty password string
    let password = "";
    // Generate the password character by character
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randomIndex];
    }
    return password
}

