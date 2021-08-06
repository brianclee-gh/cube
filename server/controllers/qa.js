/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
const axios = require('axios');
// eslint-disable-next-line no-unused-vars
const { LibraryTemplatePlugin } = require('webpack');
const { GITHUB_KEY, ATELIER_URL } = require('../config');

module.exports = {
  getQuestions: (req, res) => {
    // eslint-disable-next-line prefer-const
    let { product_id, page, count } = req.query;
    page = page || 1;
    count = count || 100;
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

  getAnswers: (req, res) => {
    const { question_id } = req.params;
    let { page, count } = req.query;
    page = page || 1;
    count = count || 5;
    const url = `${ATELIER_URL}/qa/questions/${question_id}/answers/?page=${page}&count=${count}`;
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

  helpfulQuestion: (req, res) => {
    // let { question_helpfulness } = req.body;
    const { question_id } = req.params;
    const url = `${ATELIER_URL}/qa/questions/${question_id}/helpful`;
    axios.put(url, null, {
      headers: { Authorization: GITHUB_KEY },
    })
      .then((data) => {
        console.log(data);
        res.send(data);
        res.end();
      })
      .catch((err) => {
        res.send(err);
        res.end();
      });
  },

  reportQuestion: (req, res) => {
    const { question_id } = req.params;
    const url = `${ATELIER_URL}/qa/questions/${question_id}/report`;
    axios.put(url, null, {
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

  helpfulAnswer: (req, res) => {
    const { answer_id } = req.params;
    const url = `${ATELIER_URL}/qa/answers/${answer_id}/helpful`;
    axios.put(url, null, {
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

  reportAnswer: (req, res) => {
    const { answer_id } = req.params;
    const url = `${ATELIER_URL}/qa/answers/${answer_id}/report`;
    axios.put(url, null, {
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

  postQuestion: (req, res) => {
    const productID = Number(req.body.product_id);
    const url = `${ATELIER_URL}/qa/questions/`;
    const body = {
      body: req.body.body,
      name: req.body.name,
      email: req.body.email,
      product_id: productID,
    };

    axios.post(url, body, {
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

  postAnswer: (req, res) => {
    const { question_id } = req.params;
    const url = `${ATELIER_URL}/qa/questions/${question_id}/answers`;
    const body = {
      body: req.body.body,
      name: req.body.name,
      email: req.body.email,
      photos: req.body.photos,
    };
    console.log(`received request ${req.params.question_id}`);

    axios.post(url, body, {
      headers: { Authorization: GITHUB_KEY },
    })
      .then((data) => {
        res.status(201).send(data.data);
        res.end();
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send(err);
        res.end();
        console.log('fail');
      });
  },
};

// axios.get('/qa/questions');
// // does not include any reported questions

// axios.get('/qa/questions/:question_id/answers');
