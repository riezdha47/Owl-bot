const mongoose = require('mongoose');

const logsSchema = new mongoose.Schema({
    guildId: {
        type: String,
        required: true
    },

    type: {
        type: String,
        default: null
    },

    message: {
        type: String,
        default: null
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model(
    'Logs',
    logsSchema
);
