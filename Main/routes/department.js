const router = require('express').Router();
const db = require('../config/connection');

// GET
const viewAllDepartments = router.get('/', (req, res) => {
    const sql = `SELECT id, name FROM department`;

    db.query(sql, (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'error', error: err.message });
        }
        res.json({
            message: 'success',
            data: data
        });
    });
});

// POST
const addDepartment = router.post('/', ({ body }, res) => {
    if (!body || !body.name) {
        return res.status(401).json({ message: 'error', error: 'Bad Request: request body is required.'})
    }
    const sql = `INSERT INTO department (name) VALUES (?)`;
    const params = [body.name];

    db.query(sql, params, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'error', error: err.message })
        }
        res.status(201).json({
            message: 'success',
            data: body
        });
    });
});

module.exports = { viewAllDepartments, addDepartment };
module.exports = router;
