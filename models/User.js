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
            type: schema.types.objectId,
            ref: 'User'
        }
    ]
},
{
    toJSON: {
         virtuals: true,
         getters: true
    },

    id: false
}
);

//friends couts this is the the vitual and why it is set to true 
UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce(
         (total, friends) => total + friends.length + 1, 0
    );
});

//creating user model using the UserSchema 
const User = model('User', UserSchema);

//Exporting the User model 
module.exports = User;
