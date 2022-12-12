const Movie = require("../models/Movie");

function isAuth() {
    return (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.status(401).json({ message: 'Please log in'});
        }
    };
}

function isGuest() {
    return (req, res, next) => {
        if (!req.user) {
            next();
        } else {
            res.status(400).json({ message: 'You are already signed in'});
        }
    };
}

function isAdmin() {
    return (req, res, next) => {
        if (req.user && req.user.role === 'admin') {
            next();
        } else {
            res.status(403).json({ message: 'You cannot modify this record'});
        }
    };
}

function hasLiked() {

    return async (req, res, next) => {
        const movie = await Movie.findById(req.user._id).lean();

        if (req.user && req.user.role === 'user' && !movie.likes.toString().includes(req.user._id)) {
            next();
        } else {
            res.status(403).json({message: 'You already liked this record'});
        }
    };
}

module.exports = {
    isAuth,
    isGuest,
    isAdmin,
    hasLiked
};
