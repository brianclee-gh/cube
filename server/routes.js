const router = require('express').Router();
const controller = require('./controllers');

router.get('/products', controller.products.getProducts);
// router.get('/products/:productId', controller.products.getProduct);

// router.get('/qa', controller.qa.get);

// router.get('/reviews', controller.reviews.post);
router.get('/reviews', controller.reviews.getReviews);

module.exports = router;
