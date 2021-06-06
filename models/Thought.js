const { Schema, model } = require('mongoose');
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
        required: true
    }
},
{
    toJSON: {
        vituals: true,
        getters: true
    },
    id: false
}
);

const Thought = model ('Thought', ThoughtSchema);

module.exports = Thought;  

