document.getElementById('fetchData').addEventListener('click', fetchData);

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        const dataList = document.getElementById('dataList');
        dataList.innerHTML = ''; // Clearing previous data.
        data.slice(0, 5).forEach(post => {
            let listItem = document.createElement('li');
            listItem.textContent = post.title;
            dataList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
