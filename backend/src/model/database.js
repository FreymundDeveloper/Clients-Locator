const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '13_mund_2',
    port: 5432,
});

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

module.exports = {
    pool,
    createTable,
};
