const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const localStrategy = require('passport-local');
const bcrypt = require('bcryptjs');
const redis = require('connect-redis')(session);
const flash = require('connect-flash');
const saltRounds = 12;

const User = require('../database/models/User');
const cardRouter = require('./routes/cards');

const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV || 'development';
const SESSION_SECRET = process.env.SESSION_SECRET || 'kabob';

if (!process.env.REDIS_STORE_URI) {
  throw new Error('redis store uri not set');
}

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(
  session({
    store: new redis({ url: process.env.REDIS_STORE_URI, logErrors: true }),
    secret: SESSION_SECRET,
    resave: false,
    cookie: { secure: ENV === 'production' }
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  return done(null, {
    id: user.id,
    username: user.username
  });
});

passport.deserializeUser((user, done) => {
  User.where('id', user.id)
    .fetch()
    .then(dbUser => {
      dbUser = dbUser.toJSON();
      return done(null, {
        id: dbUser.id,
        username: dbUser.username
      }).catch(err => {
        return done(err);
      });
    });
});

passport.use(
  new localStrategy((username, password, done) => {
    return User.where('username', username)
      .fetch()
      .then(user => {
        if (user === null) {
          return done(null, false, {
            message: `user: ${username} does not exist`
          });
        } else {
          user = user.toJSON();
          bcrypt.compare(password, user.password).then(res => {
            if (res) {
              return done(null, user);
            } else {
              return done(null, false, { message: 'incorrect password' });
            }
          });
        }
      })
      .catch(err => {
        return done(err);
      });
  })
);

<<<<<<< HEAD
app.post('/cards', (req, res) => {
  const newCard = {
    title: req.body.title,
    priority_id: parseInt(req.body.priority),
    status_id: 1
  };

  new Card(newCard)
    .save()
    .then(() => {
      return res.send('task posted succesfuly');
    })
    .catch(err => {
      return res.send(err);
    });
});

app.get('/cards', (req, res) => {
  Card.fetchAll()
    .then(cards => {
      res.json(cards);
    })
    .catch(err => {
      res.send(err);
    });
});

app.put('/cards', (req, res) => {
  const editedCard = req.body;

  //null for now, havent integrated users yet
  editedCard.created_by = null;
  editedCard.assigned_to = null;

  Card.where('id', editedCard.id)
    .fetch()
    .then(card => {
      card
        .save(editedCard)
        .then(() => {
          res.send('card updated succesfully');
        })
        .catch(err => {
          res.send(err);
        });
    });
});

app.delete('/cards', (req, res) => {
  const id = req.body.id;

  Card.where('id', id)
    .destroy()
    .then(() => {
      res.send('card deleted succesfully');
    })
    .catch(err => {
      res.send(err);
    });
});

app.post('/register', (req, res) => {
  const newUser = req.body;

  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      res.writeHead(500);
      return res.send('Error Creating Account');
    }

    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) {
        res.writeHead(500);
        return res.send('Error creating account');
      }

      return new User({
        username: newUser.username,
        password: hash,
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email
      })
        .save()
        .then(() => {
          res.send('Account created successfully');
        })
        .catch(err => {
          res.send(err);
        });
    });
  });
});

=======
app.use('/cards', cardRouter);
>>>>>>> dev
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT: ${PORT}`);
});
