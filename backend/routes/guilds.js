const express = require('express');

const router = express.Router();

const {
    getGuilds
} = require('../controllers/guildController');

router.get('/', getGuilds);

module.exports = router;
