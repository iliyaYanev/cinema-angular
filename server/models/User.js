const { model, Schema } = require('mongoose');


const userSchema = new Schema({
    email: { type: String, required: [true, 'Email is required'], unique: true },
    password: { type: String, required: [true, 'Password is required'] },
    username: { type: String, required: [true, 'Username is required'], unique: true },
    firstName: { type: String, required: [true, 'First name is required']},
    lastName: { type: String, required: [true, 'Last name is required']}
});


userSchema.index({ email: 1}, {
    collation: {
        locale: 'en',
        strength: 1
    }
});

const User = model('User', userSchema);

module.exports = User;
