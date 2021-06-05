const router  = require('express').Router();
//// Import all of the API routes from /api/index.js (no need for index.js though since it's implied)
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    //.send used a web error I like this vs pop up of .json
     res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;