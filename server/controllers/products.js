/* eslint-disable camelcase */
const axios = require('axios');
const { GITHUB_KEY, ATELIER_URL } = require('../config');

// const defaultHeader = {
//   headers: { Authorization: GITHUB_KEY }
// }

// const axiosRequest = function(url, res, options = defaultHeader) {
//   axios.get(url, options)
// .then((data) => {
//   res.send(data.data);
//   res.end();
// })
// .catch((err) => {
//   res.send(err);
//   res.end();
// })
// }

module.exports = {
  getProducts: (req, res) => {
    axios.get(`${ATELIER_URL}/products`, {
      headers: { Authorization: GITHUB_KEY },
      page: 2,
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
  getProduct: (req, res) => {
    const { product_id } = req.params;
    const url = `${ATELIER_URL}/products/${product_id}`;
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
  getStyles: (req, res) => {
    const { product_id } = req.params;
    const url = `${ATELIER_URL}/products/${product_id}/styles`;
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
  getRelatedProducts: (req, res) => {
    const { product_id } = req.params;
    const url = `${ATELIER_URL}/products/${product_id}/related`;
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

// axios.get('/products/:product_id/related');
// returns [product_ids] of products related to specified product
