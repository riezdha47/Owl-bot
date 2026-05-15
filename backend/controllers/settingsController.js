const GuildSettings = require('../database/models/GuildSettings');

exports.getSettings = async(req, res) => {
    try {
        const { guildId } = req.query;

        const settings = await GuildSettings.findOne({
            guildId
        });

        res.status(200).json({
            status: true,
            data: settings
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
};

exports.updateSettings = async(req, res) => {
    try {
        const { guildId, data } = req.body;

        let settings = await GuildSettings.findOne({
            guildId
        });

        if (!settings) {
            settings = await GuildSettings.create({
                guildId,
                ...data
            });
        } else {
            await GuildSettings.updateOne(
                { guildId },
                data
            );
        }

        res.status(200).json({
            status: true,
            message: 'Settings updated successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
};
