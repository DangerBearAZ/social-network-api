const router = require('express').Router();

const {
    addThought, 
    getThoughtById,
    updateThought,
    deleteThought
    
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


module.exports = router;
