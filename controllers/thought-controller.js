
const { Thought, User } = require('../models')

const thoughtController = { 
    // add thought 
    addThought({ params, body }, res) {
        console.log(body);
        Thought.create(body)
        .then(({_id}) => {
            return User.findOneAndUpdate(
                { _id: params.userId }, 
                { $push: { comments: _id } },
                { new: true }
            );
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No User found with this Id! '});
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => res.json(err));
    },
      //GET a single thought by id
      getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
        .select('-__v')
        .then(dbUserData => {
             if(!dbUserData) {
                 return res.status(404).json({ message: 'No thoughts found with this id.' });
             }
             res.json(dbThought);
        })
        .catch(err => res.json(err));
   },

   //update a thought 
   updateThought({ params, body }, res) {
     Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
     .then(dbUserData => {
       if (!dbUserData) {
         res.status(404).json({ message: 'No Thought found with this id' });
         return; 
       }
       res.json(dbUserData);
     })
     .catch(err => res.status(400).json(err));
   },



    ///remove thought 
    deleteThought({ params }, res) {
      Thought.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No Thought found with this id!' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },

    //POST new reaction
    addReaction({ params, body }, res) {
      Thought.findOneAndUpdate({ _id: params.thoughtId }, { $push: { reactions: body} }, { new: true, runValidators: true })
      .then(dbUserData => {
           if (!dbUserData) {
                return res.status(404).json({ message: 'No thoughts found with that id.' });
           }
           res.json(dbUserData);
      })
      .catch(err => res.json(err));
 },

 //DELETE reaction
 deleteReaction({ params, body }, res) {
      console.log('params', params.thoughtId);
      console.log('body', body.reactionId);
      Thought.findOneAndUpdate(
           { _id: params.thoughtId },
           { $pull: { reactions: { reactionId: body.reactionId } } },
           { new: true }
      )
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
           console.log(err);
           res.json(err);
      });
 }

};

module.exports = thoughtController;