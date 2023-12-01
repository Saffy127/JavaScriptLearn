// Writing a script to define routes and handle requests.
const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//Simulating a simple database using an array
let items = [{ id: 1, name: 'Item 1'}, { id: 2, name: 'Item 2' }];

app.get('/api/items', (req, res) => {
    res.json(items);
});

// Creating a (POST) Item
app.post('/api/items', (req,res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name
    };
    items.push(newItem);
    res.json(newItem);
});

// Update (PUT) Item, updating an existing item
app.put('/api/items/:id', (req, res) => {
    let item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found.');

    item.name = req.body.name;
    res.json(items);
});
