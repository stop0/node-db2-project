const express = require("express")
const helmet = require('helmet');
const Cars = require('./cars/cars-router');

const server = express()

// DO YOUR MAGIC

server.use(helmet());
server.use(express.json());

server.use('/api/cars', Cars);

module.exports = server
