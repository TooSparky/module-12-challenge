const mysql = require('mysql2');

let db = null;

module.exports = {
    mysql: () => {
        if(!db) {
            db = mysql.createConnection(
                {
                    host: 'localhost',
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE
                },
                console.log(`Connected to the database`)
            );
        }
        return db;
    }
};
