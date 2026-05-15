module.exports = async(req, res, next) => {
    try {
        next();
    } catch (error) {
        return res.status(401).json({
            status: false,
            message: 'Unauthorized'
        });
    }
};
