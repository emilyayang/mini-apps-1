const express = require('express');
const app = express();
const port = 3000;

const router = require('./router');
var morgan = require('morgan');
var bodyParser = require('body-parser');
const path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist'))); 
app.use('/api', router);

app.listen(port, () => console.log(`Listening on port ${port}!`));