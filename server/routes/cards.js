const express = require('express');
const router = express.Router();
const Card = require('../../database/models/Card');

router.post('/', (req, res) => {
  const newCard = req.body;

  newCard.status_id = 1;

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
  Card.fetchAll({
    withRelated: ['status', 'priority', 'createdBy', 'assignedTo']
  })
    .then(cardList => {
      cardList = cardList.toJSON();
      const cards = [];

      cardList.forEach(card => {
        const { id, title, body } = card;

        const newCard = {
          id,
          title,
          body,
          status: card.status.name,
          priority: card.priority.name,
          assignedTo: card.assignedTo.first_name,
          createdBy: card.createdBy.first_name
        };

        cards.push(newCard);
      });

      res.json(cards);
    })
    .catch(err => {
      res.send(err);
    });
});

router.put('/:id', (req, res) => {
  const editedCard = req.body;
  const id = req.params.id;

  Card.where('id', id)
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

router.delete('/:id', (req, res) => {
  const id = req.params.id;

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
