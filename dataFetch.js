document.getElementById("fetchData").addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        document.getElementById("output").textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error.message);
    });
});
