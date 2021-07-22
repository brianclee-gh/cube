const axios = require('axios');
const { GITHUB_KEY, ATELIER_URL } = require('../config');

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
    axios.get(`${ATELIER_URL}/products/:product_id`, {
      headers: { Authorization: GITHUB_KEY },
      product_id: 17067,
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

// retrieves list of products
// parameters:
//  page (INT) selects page of results to return, default is 1
//  count (INT) selects how many results per page to return, default is 5

// EXAMPLE:
//  {
//   "id": 1,
//   "name": "Camo Onesie",
//   "slogan": "Blend in to your crowd",
//   "description": "The So Fatigue you blending in to even the wildest surroundings.",
//   "category": "Jackets",
//   "default_price": "140"
// },

// axios.get('/products:product_id');
// // returns all product level info for specific product id

// axios.get('/products/:product_id/styles');
// // photos, skus

// axios.get('/products/:product_id/related');
// returns [product_ids] of products related to specified product
