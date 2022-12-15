const router = require('express').Router();
const { isGuest } = require('../middlewares/guards');
const { register, login, logout } = require('../services/users');
const mapErrors = require('../utils/mapper');


router.post('/register', async (req, res) => {
    try {
        const { username, email, firstName, lastName, password, passwordConfirm } = req.body;

        console.log(username, email, firstName, lastName, password, passwordConfirm);

        if (!email || !username || !firstName ||
            !lastName || !password || !passwordConfirm) {
            throw new Error('All fields are required!');
        } else if (password !== passwordConfirm) {
            throw new Error('Password mismatch!');
        }

        const result = await register(email, username, password, firstName, lastName);
        res.status(201).json(result);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.post('/login', isGuest(), async (req, res) => {
    try {
        const result = await login(req.body.email, req.body.password);
        res.json(result);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.get('/logout', (req, res) => {
    logout(req.params.token);
    res.status(204).end();
});

module.exports = router;
