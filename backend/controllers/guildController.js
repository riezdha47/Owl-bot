exports.getGuilds = async(req, res) => {
    try {
        res.status(200).json({
            status: true,
            data: []
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
};
