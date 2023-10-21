const submitButton = document.getElementById("submitAnswer");
const feedback = document.getElementById("feedback");

submitButton.addEventListener("click", function(){
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        if (selectedAnswer.value === "Paris"){
            feedback.textContent = "Correct! The capital of France is Paris.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Wrong answer. Try again!";
            feedback.style.color = "red";
        }
    } else {
        feedback.textContent = "Please select an answer";
        feedback.style.color = "orange";
    }
});

