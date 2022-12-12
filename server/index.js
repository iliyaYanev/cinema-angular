const express = require('express');
const mongoose = require('mongoose');

const cors = require('./middlewares/cors');
const moviesController = require('./controllers/movies');
const usersController = require('./controllers/users');
const auth = require('./middlewares/auth');


start();

async function start() {
    try {
        await mongoose.set('strictQuery', false).connect('mongodb://localhost:27017/soft-cinema', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('Database ready');
    } catch (err) {
        console.error('Database connection failed');
        process.exit(1);
    }

    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(auth());
    app.use('/movies', moviesController);
    app.use('/users', usersController);

    app.get('/', (req, res) => res.json({ message: 'REST service operational'}));

    app.listen(3030, () => console.log('REST service started on port 3030'));
}
