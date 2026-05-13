const express = require('express');
const cors = require('cors');

const guildRoutes = require('./routes/guilds');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/guilds', guildRoutes);

app.get('/', async(req, res) => {
    res.status(200).json({
        status: true,
        message: 'API Running Successfully'
    });
});

module.exports = app;
