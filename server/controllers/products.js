const axios = require('axios');

axios.get('/products');
// retrieves list of products
// parameters:
//  page (INT) selects page of results to return, default is 1
//  count (INT) selects how many results per page to return, default is 5

// EXAMPLE:
//  {
//   "id": 1,
//   "name": "Camo Onesie",
//   "slogan": "Blend in to your crowd",
//   "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
//   "category": "Jackets",
//   "default_price": "140"
// },

axios.get('/products:product_id');
// returns all product level info for specific product id

axios.get('/products/:product_id/styles');
// photos, skus

axios.get('/products/:product_id/related');
// returns [product_ids] of products related to specified product
