const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },

    username: {
        type: String,
        default: null
    },

    premium: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model(
    'User',
    userSchema
);
