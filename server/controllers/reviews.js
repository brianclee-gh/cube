/* eslint-disable no-console */
const axios = require('axios');
const { GITHUB_KEY, ATELIER_URL } = require('../config');

const getReview = (req, res) => {
  // get productId from req.body
  // eslint-disable-next-line camelcase
  const { product_id, page, count } = req.query;
  // const count = '2';
  // eslint-disable-next-line camelcase
  const url = `${ATELIER_URL}/reviews/?product_id=${product_id}&count=${count}&page=${page}`;
  axios.get(url, {
    headers: { Authorization: GITHUB_KEY },
    // page: '3',
  })
    .then((data) => {
      res.send(data.data);
      res.end();
    })
    .catch((err) => {
      console.log(err);
      res.send('error');
      res.end();
    });
};

module.exports = {
  // eslint-disable-next-line object-shorthand
  getReviews: getReview,
};

// axios.get('/reviews');
// parameters
//  page(INT) selects page to return, default is 1
//  count(INT) specifies results per page to return, default is 5
//  sort(TEXT) changes sort order based on: 'newest', 'helpful', relevant
//  product_id(INT) specifies product to retrieve

// axios.get('/reviews/meta');
// returns review metadata for product_id parameter
