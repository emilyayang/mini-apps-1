var express = require('express');
var app = express();

const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const port = 3000;

const router = require('./router.js')

app
  .use(morgan('dev'))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use("/", express.static(path.join(__dirname, "../client/dist")))

app.use("/api", router)

app.listen(port, () => console.log(`Listening on port ${port}!`))