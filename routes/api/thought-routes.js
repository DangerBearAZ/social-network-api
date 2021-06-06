const router = require('express').Router();

const {
    addThought, 
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
    
} = require('../../controllers/thought-controller'); 

//api/thoughts
router
.route('/')
.post(addThought);


// /api/comments/<thoughtID>/<commentId>
router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);


//Reactions 
// /api/thoughts/:thoughtId/reactions
router
.route('/:thoughtId/reactions')
.post(addReaction)
.delete(deleteReaction)


module.exports = router;
