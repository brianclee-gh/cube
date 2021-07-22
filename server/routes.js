const router = require('express').Router();
const controller = require('./controllers');

// Connect controller methods to their corresponding routes
router.get('/products', controller.products.get);

router.get('/qa', controller.qa.get);

router.post('/reviews', controller.reviews.post);

module.exports = router;
