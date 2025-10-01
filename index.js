const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// API-Endpoint zum Erstellen eines Repositories
app.post('/repositories', (req, res) => {
    const { name } = req.body;
    // Logik zur Erstellung eines Repositories
    res.status(201).json({ message: `Repository ${name} erstellt!` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});