'use strict';

const fs = require('fs');
const fileReader = require('../lib/file-reader/reader');

const mockText1 = `${__dirname}/../lib/assets/1.txt`;
const mockText2 = `${__dirname}/../lib/assets/2.txt`;
const mockText3 = `${__dirname}/../lib/assets/3.txt`;


let mockData = [];

describe('testing fileReader module that reads there files', () => {
  beforeAll(() => {
  
    mockData = [
      fs.readFileSync(mockText1, { encoding: 'utf-8' }),
      fs.readFileSync(mockText2, { encoding: 'utf-8' }),
      fs.readFileSync(mockText3, { encoding: 'utf-8' }),
    ];
  });

  test('should show that the data we read from readThreeFiles equals the data in our mockData array', (done) => {
    fileReader.readThreeFiles(mockText1, mockText2, mockText3, (err, data1, data2, data3) => {
      expect(data1).toEqual(mockData[0]);
      expect(err).toBeNull();
      done();
      
    });
  });

  test('should return an error for a bad file path on the first item', (done) => {
    fileReader.readThreeFiles('bad path', mockText2, mockText3, (err) => {
      expect(err).toHaveProperty('errno');
      expect(err.code).toEqual('ENOENT');
      done();
    });
  });


});