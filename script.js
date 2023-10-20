let counter = document.getElementById("counter");
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click", function() {
    counter.textContent = parseInt(counter.textContent) + 1;
});

decreaseBtn.addEventListener("click", function() {
    counter.textContent = parseInt(counter.textContent) - 1;
});

resetBtn.addEventListener("click", function() {
    counter.textContent = 0;
});

