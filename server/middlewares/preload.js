const { getById } = require('../services/movies');


module.exports = () => async (req, res, next) => {
    const id = req.params.id;
    try {
        res.locals.movie = await getById(id).lean();
        next();
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: 'Record not found' });
    }
};
