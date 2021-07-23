const router = require('express').Router();
const controller = require('./controllers');

router.get('/products', controller.products.getProducts);
router.get('/products/:product_id', controller.products.getProduct);
router.get('/products/:product_id/styles', controller.products.getStyles);
router.get('/products/:product_id/related', controller.products.getRelatedProducts);

router.get('/qa/questions/:product_id', controller.qa.getQuestions);

// router.get('/reviews', controller.reviews.post);
router.get('/reviews', controller.reviews.getReviews);
router.get('/reviews/meta', controller.reviews.getReviewMeta);
module.exports = router;
