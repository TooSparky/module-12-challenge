const express = require('express');
const startPrompts = require('./index');

const apiRoutes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);

app.use('*', (req, res) => {
    res.status(400).end();
});

app.listen(PORT, () => {
    console.log(`\nServer running on port ${PORT}`)
    startPrompts();
});
