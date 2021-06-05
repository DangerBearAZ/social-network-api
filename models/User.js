const { Schema, model } = require('mongoose');

const UserSchema = new Schema({ 
    username:{
        type: string,
        required: true,
        trim: true,
        unique: true
    },
    emial:{
        type: string, 
        require: true, 
        unique: true 

    },
    thought:{ 

    },
    friends: {

    }
});

//creating user model using the UserSchema 
const User = model('User', UserSchema);

//Exporting the User model 
module.exports = User; 
