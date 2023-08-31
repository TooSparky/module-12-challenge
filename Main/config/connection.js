const mysql = require('mysql2');

let db = null;

module.exports = {
    mysql: () => {
        if(!db) {
            db = mysql.createConnection(
                {
                    host: 'localhost',
                    user: 'root',
                    password: 'bootcamp',
                    database: 'workplace_db'
                },
                console.log(`Connected to the database`)
            );
        }
        return db;
    }
};
