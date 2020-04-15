const express = require('express');

const db = require('../data/db-confing');
const carsRouter = require('../cars-router');

const server = express();

server.use(express.json());
server.use('/cars', carsRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Carlos server is up and working ' });
});
module.exports = server;
