const { model, Schema, Types: { ObjectId } } = require('mongoose');

const schema = new Schema({
    title: { type: String, required: [true, 'Movie title is required'] },
    year: {
        type: Number,
        required: true,
        min: [1900, 'Year must be between 1900 and 2023'],
        max: [2023, 'Year must be between 1900 and 2023']
    },
    description: { type: String, required: true, minlength: [10, 'Description must be at least 10 characters long'] },
    img: { type: String, required: true, match: [/^https?:\/\//, 'The image url should start with http:// or https://'] },
    genre: {type: String, required: true, enum: ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror']},
    likes: [{ type: ObjectId, ref: 'User' }]
});

const Movie = model('Movie', schema);

module.exports = Movie;
