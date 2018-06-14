'use strict';

const fs = require('fs');

const fileReader = require('../lib/reader.js');

//write test to ensure the reader function rejects errors with invalid file paths

const filePath1 = `${__dirname}/./data/filepath1.txt`;
const filePath2 = `${__dirname}/./data/filepath2.txt`;
const filePath3 = `${__dirname}/./data/filepath3.txt`;
//these refer to our three files in our data folder that we will use to test if our reader.js functionality works properly

let mockData = []; //this array will be filled with data from each of our filepaths above after it is read. This array is used for comparison to the data we return from our tests

describe('testing fileReader module that reads three files', () => {
  beforeAll(() => {
    mockData = [ //readFileSync should ONLY be used for testing purposes beacuse it is synchronous "blocking", in real code we would use readFile
      fs.readFileSync(filePath1, {encoding: 'utf-8'}),
      fs.readFileSync(filePath2, {encoding: 'utf-8'}),
      fs.readFileSync(filePath3, {encoding: 'utf-8'})
    ];
  });

  test('should show that the data we read from readThreeFiles equals the data in our mockData array', () => {
    fileReader.readThreeFiles(filePath1, filePath2, filePath3, (err, data1, data2, data3) => {
      expect(data1).toEqual(filePath[0]); //we expect that our data1 argument of the callback in our readThreeFiles function equals the first filepath in our mockData array
      expect(data2).toEqual(filePath[1]);
      expect(data3).toEqual(filePath[2]);
      expect(err).toBeNull(); //we expect the error callback to return null
    });
  });

  test('should return an error for a bad filepath on the first item', () => {
    fileReader.readThreeFiles('bad path', filePath2, filePath3, (err, data1, data2, data3) => {
      expect(err).toHaveProperty('errno');
      expect(err.code).toEqual('ENOENT'); //this indicates that there is a bad filepath and we expect an 'Error No Entry'
    })
  })
});
