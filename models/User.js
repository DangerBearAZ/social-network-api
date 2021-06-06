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
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]

},
    {
        toJSON: {
            vituals: true,
            getters: true
        },
        id: false
    }
);

// count of friends 
UserSchema.virtual('friendCount').get(function () {
    return this.comments.length;
});

//creating user model using the UserSchema 
const User = model('User', UserSchema);

//Exporting the User model 
module.exports = User;
