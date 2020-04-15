const express = require('express');
const db = require('./data/db-confing');
const router = express.Router();

router.get('/', async (req, res) => {
  const getAllCars = await db('cars');
  try {
    res.status(200).json(getAllCars);
  } catch (Error) {
    res.status(500).json({ Error: 'cannot get cars' });
  }
});

router.post('/', async (req, res) => {
  try {
    const createCars = req.body;
    const postCars = await db('cars').insert(createCars);
    res.status(201).json(postCars);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'there was an error while adding the cars' });
  }
});

module.exports = router;
