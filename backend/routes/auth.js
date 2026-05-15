const express = require('express');

const router = express.Router();

const {
    discordLogin
} = require('../controllers/authController');

router.get('/discord', discordLogin);

module.exports = router;
