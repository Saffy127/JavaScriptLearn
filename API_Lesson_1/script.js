document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        const postsContainer = document.getElementById('posts');
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            `;
        });
    })
    .catch(error => console.error('Error:', error));
});

