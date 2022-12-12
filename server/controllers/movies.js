const router = require('express').Router();
const api = require('../services/movies');
const { isAuth, isAdmin, hasLiked } = require('../middlewares/guards');
const mapErrors = require('../utils/mapper');
const preload = require('../middlewares/preload');


router.get('/', async (req, res) => {
    const data = await api.getAll();
    res.json(data);
});

router.post('/', isAdmin(), async (req, res) => {
    const movie = {
        title: req.body.title,
        year: req.body.year,
        description: req.body.description,
        img: req.body.img
    };

    try {
        const result = await api.create(movie);
        res.status(201).json(result);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.get('/:id', preload(), (req, res) => {
    const movie  = res.locals.movie;
    res.json(movie);
});

router.put('/:id', preload(), isAdmin(), async (req, res) => {
    const movieId = req.params.id;
    const movie = {
        title: req.body.title,
        year: req.body.year,
        description: req.body.description,
        img: req.body.img
    };

    try {
        const result = await api.update(movieId, movie);
        res.json(result);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.delete('/:id', preload(), isAdmin(), async (req, res) => {
    try {
        const itemId = req.params.id;
        await api.deleteById(itemId);
        res.status(204).end();
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.post('/:id/like', preload(), hasLiked(), isAuth(), async (req, res) => {
    try {
        const result = await api.like(req.params.id);

        res.status(200).json(result)
    }
    catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

module.exports = router;
