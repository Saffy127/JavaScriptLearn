async function fetchData() {
    //Make the API request
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    //Check for Errors
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    //Parse the response
    const data = await response.json();

    // Now that the data is parsed I can use it 
    console.log(data);
}

fetchData();
