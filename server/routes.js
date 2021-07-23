const router = require('express').Router();
const controller = require('./controllers');

// Products:
router.get('/products', controller.products.getProducts);
router.get('/products/:product_id', controller.products.getProduct);
router.get('/products/:product_id/styles', controller.products.getStyles);

// Q&A:
router.get('/qa/questions', controller.qa.getQuestions);
router.get('/qa/questions/:question_id/answers', controller.qa.getAnswers);
// 153103 - question_id for 17072

// Reviews & Ratings:
// router.get('/reviews', controller.reviews.post);
router.get('/reviews', controller.reviews.getReviews);
router.get('/reviews/meta', controller.reviews.getReviewMeta);
module.exports = router;
