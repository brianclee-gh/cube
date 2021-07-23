/* eslint-disable camelcase */
const axios = require('axios');
const { GITHUB_KEY, ATELIER_URL } = require('../config');

module.exports = {
  getReview: (req, res) => {
    // get productId from req.body
    axios.get(`${ATELIER_URL}/reviews`, {
      headers: {
        Authorization: GITHUB_KEY,
      },
      sort: 'newest',
      product_id: '',
    })
      .then((data) => {
        res.send(data);
        res.end();
      })
      .catch((err) => {
        console.log(err);
        res.send('error');
        res.end();
      });
  },
  getReviewMeta: (req, res) => {
    const { product_id } = req.query;
    const url = `${ATELIER_URL}/reviews/meta/?product_id=${product_id}`;
    axios.get(url, {
      headers: { Authorization: GITHUB_KEY },
    })
      .then((data) => {
        res.send(data.data);
        res.end();
      })
      .catch((err) => {
        res.send(err);
        res.end();
      });
  },
};

// axios.get('/reviews');
// parameters
//  page(INT) selects page to return, default is 1
//  count(INT) specifies results per page to return, default is 5
//  sort(TEXT) changes sort order based on: 'newest', 'helpful', relevant
//  product_id(INT) specifies product to retrieve

// axios.get('/reviews/meta');
// returns review metadata for product_id parameter
