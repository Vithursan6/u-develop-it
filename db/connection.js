const mysql = require('mysql2');

//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //mysql username
        user: 'root',
        //mysql password
        password: 'password123',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;