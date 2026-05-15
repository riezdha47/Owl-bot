const app = require('./server');

const {
    initializeDatabase
} = require('./services/databaseService');

const PORT = process.env.PORT || 3000;

const startBackend = async() => {
    try {
        await initializeDatabase();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

startBackend();
