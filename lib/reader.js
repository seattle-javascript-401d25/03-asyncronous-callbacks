'use strict';

const fs = require('fs')

const fileReader = module.exports = {};

fileReader.readThreeFiles = (fileArray, callback) => {
  for(let i = 0; i < fileArray.length; i ++) {
    return fs.readFile(fileArray[i], (err1, data1) => {
      if (err1) return callback(err1);
      return fs.readFile(fileArray[i] + 1, (err2, data2) => {
        if (err2) return callback(err2);
        return fs.readFile(fileArray[i] + 2, (err3, data3) => {
          if (err3) return callback(err3);
          return callback(null, data1.toString(), data2.toString(), data3.toString());
        });
      });
    });
  }
};
