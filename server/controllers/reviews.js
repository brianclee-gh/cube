/* eslint-disable camelcase */
/* eslint-disable no-console */
const axios = require('axios');
const { GITHUB_KEY, ATELIER_URL } = require('../config');

module.exports = {
  // eslint-disable-next-line object-shorthand
  getReviews: (req, res) => {
    const { product_id, page, count, sort} = req.query;
    axios.get(`${ATELIER_URL}/reviews/?page=${page}&count=${count}&sort=${sort}&product_id=${product_id}`, {
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

  // postReview: (req, res) => {
  //   const productID = Number(req.body.product_id);
  //   const url = `${ATELIER_URL}/reviews`;
  //   const body = {
  //     product_id: productID,
  //     rating: Number(req.body.rating),
  //     summary: req.body.summary,
  //     body: req.body.body,
  //     recommend: req.body.recommend,
  //     name: req.body.name,
  //     email: req.body.email,
  //     photos: req.body.photos,
  //     characteristics: req.body.characteristics,
  //   };

  //   axios.post(url, body, {
  //     headers: { Authorization: GITHUB_KEY },
  //   })
  //     .then((data) => {
  //       res.send(data.data);
  //       res.end();
  //     })
  //     .catch((err) => {
  //       res.send(err);
  //       res.end();
  //     });
  // },
};

// axios.get('/reviews');
// parameters
//  page(INT) selects page to return, default is 1
//  count(INT) specifies results per page to return, default is 5
//  sort(TEXT) changes sort order based on: 'newest', 'helpful', relevant
//  product_id(INT) specifies product to retrieve

// axios.get('/reviews/meta');
// returns review metadata for product_id parameter
