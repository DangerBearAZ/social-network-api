const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateformat');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 280
    },
    createdAt: {
        type: Date,
        default: Date.now, 
        get: createdAtVal => dateFormat(createdAtVal)
    },
    userName: {
        type: String,
        required: true,
        trim: true 
    }
},
{
    toJSON: {
        vituals: true,
        //getter to allow us GET functions form other places 
        getters: true
    },
    id: false
}
);

const Thought = model ('Thought', ThoughtSchema);

module.exports = Thought;  

