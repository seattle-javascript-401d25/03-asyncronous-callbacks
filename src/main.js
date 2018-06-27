const fileReader = require('./lib/file-reader/file-reader');
const logger = require('./lib/logger');

const file1= `${__dirname}/./lib/assets/1.txt`;
const file2 = `${__dirname}/./lib/assets/2.txt`;
const file3 = `${__dirname}/./lib/assets/3.txt`;

console.log(fileReader.readThreeFiles(file1, file2, file3, (err, data1, data2, data3) => {
  logger.log(logger.INFO, file1);
  logger.log(logger.INFO, file2);
  logger.log(logger.INFO, file3);
}));