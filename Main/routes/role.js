const router = require('express').Router();
const db = require('../config/connection');

const viewAllRoles = router.get('/', (req, res) => {
    const sql = `SELECT
                    department.name as department,
                    role.title, role.salary
                 FROM role
                 LEFT JOIN department
                    ON role.department_id = department.id
                 ORDER BY department.name
                `;

    db.query(sql, (err, role) => {
        if(err) {
            return res.status(500).json({ message: 'error', error: err.message });
        }
        res.json({
            message: 'success',
            data: role
        });
    });
});

const addRole = router.post('/', ({body}, res) => {
    if(!body.title || !body.salary) {
        return res.status(401).json({ message: 'error', message: err.message });
    }

    const sql = `INSERT INTO role (title) VALUES (?)`;
    const params = [body.title];

    db.query(sql, params, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'error', message: err.message });
        }

        res.status(201).json({
            message: 'success',
            data: body
        });
    });
});

module.exports = { viewAllRoles, addRole };
module.exports = router;
