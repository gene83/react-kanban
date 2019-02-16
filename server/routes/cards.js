const express = require('express');
const router = express.Router();
const Card = require('../../database/models/Card');

router.post('/', (req, res) => {
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

router.get('/', (req, res) => {
  Card.fetchAll()
    .then(cards => {
      res.json(cards);
    })
    .catch(err => {
      res.send(err);
    });
});

router.put('/', (req, res) => {
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

router.delete('/', (req, res) => {
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

module.exports = router;
