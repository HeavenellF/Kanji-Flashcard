
const express = require('express');
const path = require('path');

const api = require('./api.js');
const app = express();

const PORT = 8080;

app.use(express.static(path.join(__dirname, '..')));
app.use(express.json());


app.get('/api/cards', api.getCards);        // get all cards
app.get('/api/cards/:index', api.getCard);  // get a single card
app.put('/api/cards/:index', api.toggleCard); // change the state of a card

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});