import axios from 'axios';

axios.get('/qa/questions');
// does not include any reported questions

axios.get('/qa/questions/:question_id/answers');
