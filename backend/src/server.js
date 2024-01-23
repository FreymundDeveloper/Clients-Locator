const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const { calculateTotalDistance, generatePermutations } = require('./Utils/tspBuilder');

const app = express();
const port = 3001;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '13_mund_2',
    port: 5432,
});

app.use(bodyParser.json());
app.use(cors());

async function createTable() {
    try {
      await pool.query(`
            CREATE TABLE IF NOT EXISTS clients (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                phone VARCHAR(20),
                latitude DOUBLE PRECISION,
                longitude DOUBLE PRECISION
            );
      `);

      console.log('Table "clients" created or already exists.');

    } catch (error) {
        console.error('Error creating table:', error);
    }
}

createTable();

app.get('/clients/route', async (req, res) => {
    try {
      const result = await pool.query('SELECT id, latitude, longitude FROM clients');
      const clients = result.rows;
  
      const permutations = generatePermutations(clients.map(client => client.id));
      let minDistance = Infinity;
      let optimizedRoute = [];
  
      for (const permutation of permutations) {
        const route = permutation.map(clientId => clients.find(client => client.id === clientId));
        const distance = calculateTotalDistance(route);
  
        if (distance < minDistance) {
          minDistance = distance;
          optimizedRoute = route;
        }
      }
  
      res.json({ optimizedRoute, minDistance });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.get('/clients', async (req, res) => {
    const searchTerm = req.query.search || '';
  
    try {
        let result;

        if (searchTerm.trim() === '') {
            result = await pool.query('SELECT * FROM clients');
        } else {
            result = await pool.query(
                `SELECT * FROM clients
                WHERE name ILIKE $1
                    OR email ILIKE $1
                    OR latitude::TEXT ILIKE $1
                    OR longitude::TEXT ILIKE $1
                    OR phone ILIKE $1`,
                [`%${searchTerm}%`]
            );
        }

        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});  

app.post('/clients', async (req, res) => {
    const { name, email, phone, latitude, longitude } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO clients (name, email, phone, latitude, longitude) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [name, email, phone, latitude, longitude]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.delete('/clients/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        await pool.query('DELETE FROM clients WHERE id = $1', [userId]);
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});