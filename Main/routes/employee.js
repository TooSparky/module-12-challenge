const router = require('express').Router();
const db = require('../config/connection');

const viewAllEmployees = router.get('/', (req, res) => {
    const sql = `SELECT id, first_name, last_name FROM employee`;

    db.query(sql, (err, employee) => {
        if (err) {
            return res.status(500).json({ message: 'error', message: err.message });
        }

        res.json({
            message: 'success',
            data: employee
        });
    });
});

const updateEmployeeRole = router.put('/:id', (req, res) => {
    if (!req.body || !req.body.employee) {
        return res.status(401).json({ message: 'error', message: err.message });
    }
    const sql = `UPDATE employee SET first_name = ?, last_name = ? WHERE id = ?`;
    const params = [req.body.employee, req.params.id];

    db.query(sql, params, (err, result) => {
        if (!result.affectedRows) {
            return res.status(404).json({ message: 'error', message: err.message });
        }
    
        res.json({
            message: 'success',
            data: req.body,
            changes: result.affectedRows
        });
    });
});

const addEmployee = router.post('/', ({body}, res) => {
    if (!body.first_name || !body.last_name) {
        return res.status(401).json({ message: 'error', error: 'Bad Request: request body is required.' })
    }

    const sql = `INSERT INTO employee (name) VALUES (?)`;
    const params = [body.first_name && body.last_name];

    db.query(sql, params, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'error', error: err.message });
        }

        res.status(201).json({
            message: 'success',
            data: body
        });
    });
});

module.exports = { viewAllEmployees, updateEmployeeRole, addEmployee };
module.exports = router;
