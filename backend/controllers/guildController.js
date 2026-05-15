const {
    getBotGuilds
} = require('../services/discordService');

exports.getGuilds = async(req, res) => {
    try {
        const guilds = await getBotGuilds(global.client);

        res.status(200).json({
            status: true,
            data: guilds
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
};
