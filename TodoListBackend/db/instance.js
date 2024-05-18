const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    ssl:{
        require: true,
    },
});

pool.connect().then(() =>{
    console.log("Connected to PSQL");
});

module.exports = pool;
