const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: /.+\@.+\..+/
    }
});

//creating user model using the UserSchema 
const User = model('User', UserSchema);

//Exporting the User model 
module.exports = User;
