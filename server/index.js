const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const router = require('./routes');

// import db connection here

const app = express();
module.exports.app = app;

const PORT = 3000;
app.set('port', PORT);

app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.use(express.static(`${__dirname}/../client/dist`));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});
