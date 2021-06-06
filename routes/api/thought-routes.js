const router = require('express').Router();

const {
    addThought, 
    removeThought, 
} = require('../../controllers/thought-controller'); 

//api/thoughts/<userId> 
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<commentId>
router.route('/:pizzaId.Thoughtid').delete(removeThought);


module.exports = router;
