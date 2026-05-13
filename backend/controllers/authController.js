exports.discordLogin = async(req, res) => {
    try {
        res.status(200).json({
            status: true,
            message: 'Discord OAuth Ready'
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
};
