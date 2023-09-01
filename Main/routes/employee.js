const router = require('express').Router();
const db = require('../config/connection');
const prompts = require('../index');

router.get('/', (req, res) => {
    const sql = ``;

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

router.put('/:id', (req, res) => {
    if (!req.body || !req.body.employee) {
        return res.status(401).json({ message: 'error', message: err.message });
    }
    const sql = ``;
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

module.exports = router;
