'use strict';

const fs = require('fs');


let readOneFile = module.exports = (path, callback) => {
  fs.readFile(path, (err, data) => {
    if (err) throw err;
    callback(null, data.toString());
  });
};

// readOneFile('../data/test.txt', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
