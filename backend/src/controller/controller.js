const { pool } = require('../model/database');
const { calculateTotalDistance, generatePermutations } = require('../Utils/tspBuilder');
const { isValidLatitude, isValidLongitude } = require('../Utils/gpsValidation');

async function getOptimizedRoute() {
    const result = await pool.query('SELECT id, name, latitude, longitude FROM clients');
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

    return { optimizedRoute, minDistance };
}

async function getClients(searchTerm) {
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

    return result.rows;
}

async function postClient(data) {
    const { name, email, phone, latitude, longitude } = data;
  
    if (!isValidLatitude(latitude) || !isValidLongitude(longitude)) {
        throw new Error('Latitude and/or longitude are out of bounds.');
    }
  
    const result = await pool.query(
        'INSERT INTO clients (name, email, phone, latitude, longitude) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [name, email, phone, latitude, longitude]
    );
  
    return result.rows[0];
  }

async function deleteClient(userId) {
    const result = await pool.query('DELETE FROM clients WHERE id = $1 RETURNING *', [userId]);
  
    if (result.rows.length === 0) {
        throw new Error('Client not found.');
    }
  
    return { success: true };
}

module.exports = {
    getOptimizedRoute,
    getClients,
    postClient,
    deleteClient,
};
