const axios = require('axios');

module.exports = {
  get() {
    axios.get('/reviews');
    // do something here.
  },
};

axios.get('/reviews');
// parameters
//  page(INT) selects page to return, default is 1
//  count(INT) specifies results per page to return, default is 5
//  sort(TEXT) changes sort order based on: 'newest', 'helpful', relevant
//  product_id(INT) specifies product to retrieve

axios.get('/reviews/meta');
// returns review metadata for product_id parameter
