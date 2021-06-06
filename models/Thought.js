const { Schema, model, Types } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        required: true,
        min: 1,
        max: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userName: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;  

