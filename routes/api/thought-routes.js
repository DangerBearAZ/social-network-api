const router = require('express').Router();

const {
    addThought, 
    getThoughtById,
    updateThought,
    deleteThought
    
} = require('../../controllers/thought-controller'); 

//api/thoughts
router
.router('/')
.route(addThought);


// /api/comments/<thoughtID>/<commentId>
router
.router('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);


module.exports = router;
