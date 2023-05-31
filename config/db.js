const mysql = require('mysql')

//Constantes
// const PORT = process.env.PORT || 8891;

const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_USER = process.env.DB_USER || 'root'
const DB_PASS = process.env.DB_PASS || 'root'
const DB_NAME = process.env.DB_NAME || 'Grettel'
const DB_PORT = process.env.DB_PORT || '8889'
//Constantes


const db = mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
})

module.exports = db;