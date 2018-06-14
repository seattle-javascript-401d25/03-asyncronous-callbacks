'use strict';

const fs = require('fs');
const logger = require('./logger');

const fileReader = module.exports= {};

// this reads a single file path
fileReader.readFile = ( './src/lib/data/data1.txt' ) => {
    return fs.readFile('./src/lib/data/data1.txt'), (err, data) => {
        if err throw err;
        logger.log(logger.INFO, data.toString());
    }
}
