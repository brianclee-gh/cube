/* eslint-disable camelcase */
const axios = require('axios');
const { GITHUB_KEY, ATELIER_URL } = require('../config');

module.exports = {
  getQuestions: (req, res) => {
    let { product_id, page, count } = req.query;
    page = page || 1;
    count = count || 5;
    const url = `${ATELIER_URL}/qa/questions?product_id=${product_id}&page=${page}&count=${count}`;
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

// axios.get('/qa/questions');
// // does not include any reported questions

// axios.get('/qa/questions/:question_id/answers');
