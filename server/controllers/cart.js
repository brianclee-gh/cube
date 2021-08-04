const axios = require('axios');
const { GITHUB_KEY, ATELIER_URL } = require('../config');

module.exports = {
  getCart: (req, res) => {
    axios.get(`${ATELIER_URL}/cart`, {
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
  addCart: (req, res) => {
    const skuID = Number(req.body.sku_id);
    const count = Number(req.body.count);
    const body = {
      sku_id: skuID,
      count: count,
    };
    axios.post(`${ATELIER_URL}/cart`, body, {
      headers: { Authorization: GITHUB_KEY },
    })
      .then((response) => {
        res.send(response.data).status(201);
        res.end();
      })
      .catch((err) => {
        res.send(`error on add${err}`);
        res.end();
      });
  },
};
