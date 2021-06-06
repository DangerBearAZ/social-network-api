const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateformat');

const ReactionSchema = new Schema(
    {
         reactionId: {
              type: Schema.Types.ObjectId,
              default: () => new Types.ObjectId()
         },

         reactionBody: {
              type: String,
              required: true,
              maxLength: 280
         },

         username: {
              type: String,
              required: true,
              trim: true
         },

         createdAt: {
              type: Date,
              default: Date.now,
              get:  createdAtValue => dateFormat(createdAtValue)
         }
    },
    {
         toJSON: {
            getters: true  
         },
         id: false

    }
)


const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
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
    },
    reactions: [ReactionSchema]
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

//virtual count the length of the reaction 
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});


const Thought = model ('Thought', ThoughtSchema);

module.exports = Thought;  

