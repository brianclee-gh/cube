/* eslint-disable camelcase */
/* eslint-disable no-console */
const axios = require('axios');
const { GITHUB_KEY, ATELIER_URL } = require('../config');

module.exports = {
  // eslint-disable-next-line object-shorthand
  getReviews: (req, res) => {
    // get productId from req.body
    // eslint-disable-next-line camelcase
    const { product_id, page } = req.query;
    // const count = '2';
    // eslint-disable-next-line camelcase
    const url = `${ATELIER_URL}/reviews/?product_id=${product_id}&count=2&page=${page}`;
    axios.get(url, {
      headers: { Authorization: GITHUB_KEY },
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
  },

  getReviewMeta: (req, res) => {
    // eslint-disable-next-line camelcase
    const { product_id } = req.query;
    // eslint-disable-next-line camelcase
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
