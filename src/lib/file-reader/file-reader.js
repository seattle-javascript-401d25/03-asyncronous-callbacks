'use strict';

const fs = require('fs');
const logger = require('../logger.js');

const fileReader = module.exports = {};

fileReader.readFile = (filePath) => {
  return fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    logger.log(logger.INFO, data.toString());
  });
};
