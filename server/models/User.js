const { model, Schema } = require('mongoose');


const userSchema = new Schema({
    email: { type: String, required: [true, 'Email is required'], unique: true },
    hashedPassword: { type: String, required: true },
    username: { type: String, required: [true, 'Username is required'], unique: true },
});


userSchema.index({ email: 1}, {
    collation: {
        locale: 'en',
        strength: 1
    }
});

const User = model('User', userSchema);

module.exports = User;
