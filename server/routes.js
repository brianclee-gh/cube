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
router.put('/question/helpful', controller.qa.helpfulQuestion);
router.put('/question/report', controller.qa.reportQuestion);
router.put('/answer/helpful', controller.qa.helpfulAnswer);
router.put('/answer/report', controller.qa.reportAnswer);
router.post('/add/question', controller.qa.postQuestion);
router.post('/add/answer/:question_id', controller.qa.postAnswer);
// 153103 - question_id for 17072

// Reviews & Ratings:
// router.get('/reviews', controller.reviews.post);
router.get('/reviews', controller.reviews.getReviews);
router.get('/reviews/meta', controller.reviews.getReviewMeta);
router.post('/reviews', controller.reviews.postReviews);
module.exports = router;
