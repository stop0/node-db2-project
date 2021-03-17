// DO YOUR MAGIC
const express = require('express');
const db = require('../../data/config-db');

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
    .then(cars => {
      res.json(cars);
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to retrieve fruits' });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('cars').where({ id }).first()
    .then(car => {
      res.json(car);
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to retrieve fruit' });
    });
});

router.post('/', (req, res) => {
  const carData = req.body;
  db('Cars').insert(carData)
    .then(ids => {
      db('Cars').where({ id: ids[0] })
        .then(newCar => {
          res.status(201).json(newCar);
        });
    })
    .catch(err => {
      console.log('Car error', err);
      res.status(500).json({ message: "Failed to store data" });
    });
});

module.exports = router;
