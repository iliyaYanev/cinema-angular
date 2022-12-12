const Movie = require('../models/Movie');


async function getAll() {
    return Movie.find({});
}

async function create(movie) {
    const result = new Movie(movie);
    await result.save();

    return result;
}

function getById(id) {
    return Movie.findById(id);
}

async function update(id, movie) {
    const existing = await Movie.findById(id);

    existing.title = movie.title;
    existing.year = movie.year;
    existing.description = movie.description;
    existing.img = movie.img;
    existing.likes = movie.likes;

    await existing.save();

    return existing;
}

async function deleteById(id) {
    await Movie.findByIdAndDelete(id);
}


module.exports = {
    getAll,
    create,
    getById,
    update,
    deleteById
};
