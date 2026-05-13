const express = require('express');

const router = express.Router();

router.get('/', async(req, res) => {
    res.status(200).json({
        status: true,
        data: []
    });
});

module.exports = router;
