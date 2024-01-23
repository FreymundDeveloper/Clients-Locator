const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createTable } = require('./model/database');
const { getOptimizedRoute, getClients, postClient, deleteClient } = require('./controller/controller');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

createTable();

app.get('/clients/route', async (req, res) => {
    try {
        const result = await getOptimizedRoute();
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/clients', async (req, res) => {
    const searchTerm = req.query.search || '';

    try {
        const result = await getClients(searchTerm);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/clients', async (req, res) => {
    const data = req.body;

    try {
        const result = await postClient(data);
        res.json(result);
    } catch (error) {
        console.error(error);
        if (error.message.includes('Latitude and/or longitude are out of bounds.')) {
            res.status(400).json({ error: 'Invalid latitude and/or longitude values.' });
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});

app.delete('/clients/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const result = await deleteClient(userId);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
