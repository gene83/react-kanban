const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const localStrategy = require('passport-local');
const bcrypt = require('bcryptjs');
const redis = require('connect-redis')(session);
const flash = require('connect-flash');

const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV || 'development';

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT: ${PORT}`);
});
