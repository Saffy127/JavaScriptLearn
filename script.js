// Writing a script to define routes and handle requests.
const express = require('express');
const app = express();

app.get('/api/items', (req, res) => {
    res.json([{ name: 'Item 1' }, { name: 'Item 2' }]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));

