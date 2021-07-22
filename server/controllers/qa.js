const axios = require('axios');

module.exports = {
  get() {
    axios.get('/qa/questions');
    // do something here.
  },
};

axios.get('/qa/questions');
// does not include any reported questions

axios.get('/qa/questions/:question_id/answers');
