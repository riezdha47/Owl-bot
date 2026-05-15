const mongoose = require('mongoose');

const guildSettingsSchema = new mongoose.Schema({
    guildId: {
        type: String,
        required: true
    },

    prefix: {
        type: String,
        default: '!'
    },

    welcomeMessage: {
        type: String,
        default: 'Welcome {user}'
    },

    autoRole: {
        type: String,
        default: null
    },

    modLogChannel: {
        type: String,
        default: null
    }
});

module.exports = mongoose.model(
    'GuildSettings',
    guildSettingsSchema
);
