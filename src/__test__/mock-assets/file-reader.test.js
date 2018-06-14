'use strict';

const fs = require('fs');
// const fileReader = require('./lib/file-reader/file-reader');

// describe('testing to see if I am connected to TravisCI', () => {
// test('should equal true', () => {
// expect(true).toEqual(true);
// });
// });
  
const mockData1 = `${__dirname}/./mock-assets/mock-data1.txt`;
const mockData2 = `${__dirname}/./mock-assets/mock-data2.txt`;
const mockData3 = `${__dirname}/./mock-assets/mock-data3.txt`;

let mockData = [];

describe('testing fileReader module that reads given files', () =>

  beforeAll(() => {
    mockData = [
      fs.readFileSync(mockData1, { encoding: 'utf-8' }),
      fs.readFileSync(mockData2, { encoding: 'utf-8' }),
      fs.readFileSync(mockData3, { encoding: 'utf-8' }), 
    ];
  });

  test('should show that the data in our readAllFiles equals the mockData array', () => {
    fileReader.readThreeFiles(mockData1, mockData2, mockData3, (err, data1, data2, data3) => {
      expect(data1).toEqual(mockData1[0]);
      expect(err).toBeNull();
      expect(data2).toEqual(mockData2[1]);
      expect(err).toBeNull();
      expect(data3).toEqual(mockData3[2]);
      expect(err).toBeNull();
    });

  test('should return an error for bad file path on first item', () => {
    fileReader.readThreeFiles('bad path', mockData2, mockData3, (err, data1, data2, data3) =>{
      expect(err).toHaveProperty('errno'));
      expect(err.code.toEqual('ENOENT'));
    });
  });
