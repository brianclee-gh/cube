const express = require('express');
const morgan = require('morgan');
// const router = require('routes.js');

// import db connection here

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/', router);

app.use(express.static(`${__dirname}/../client/dist`));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});
