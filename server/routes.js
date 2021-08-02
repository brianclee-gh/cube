const router = require('express').Router();
const controller = require('./controllers');

// Products:
router.get('/products', controller.products.getProducts);
router.get('/products/:product_id', controller.products.getProduct);
router.get('/products/:product_id/styles', controller.products.getStyles);
router.get('/products/:product_id/related', controller.products.getRelatedProducts);
router.get('/products/:product_id/relatedData', controller.products.getRelatedData);

// Q&A:
router.get('/qa/questions', controller.qa.getQuestions);
router.get('/qa/questions/:question_id/answers', controller.qa.getAnswers);
router.put('/qa/questions/:question_id/helpful', controller.qa.helpfulQuestion);
router.put('/qa/questions/:question_id/report', controller.qa.reportQuestion);
router.put('/qa/answers/:answer_id/helpful', controller.qa.helpfulAnswer);
router.put('/qa/answers/:answer_id/report', controller.qa.reportAnswer);
// 153103 - question_id for 17072

// Reviews & Ratings:
// router.get('/reviews', controller.reviews.post);
router.get('/reviews', controller.reviews.getReviews);
router.get('/reviews/meta', controller.reviews.getReviewMeta);
router.post('/reviews', controller.reviews.postReviews);
module.exports = router;
