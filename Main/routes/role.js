const router = require('express').Router();
const db = require('../config/connection');
const prompts = require('../index');

router.get('/', (req, res) => {
    const sql = `SELECT
                    department.name as department,
                    role.title, role.salary
                FROM role`;

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

router.put('/:id,', (req, res) => {
    if(!req.body || !req.body.role) {
        return res.status(401).json({ message: 'error', message: err.message });
    }
    const sql = ``;
    const params = [req.body.role, req.params.id];

    db.query(sql, params, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'error', message: err.message });
        }

        if(!result.affectedRows) {
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
