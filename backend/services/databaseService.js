const connectMongoDB = require('../database/mongo');

exports.initializeDatabase = async() => {
    try {
        await connectMongoDB();

        console.log('Database initialized');
    } catch (error) {
        console.log(error);
    }
};
