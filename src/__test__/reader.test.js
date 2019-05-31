'use strict';

const fs = require('fs');
const reader = require('../lib/reader');

const mockText1 = `${__dirname}/./mock-assets/1.txt`;

describe('Testing for ...', () => {
  test('Tests for...', () => {
    reader(`${__dirname}/../lib/assets/data1.txt`, (err, data) => {
      if (err) throw err;
      expect('../lib/assets/data1.txt').toEqual('text1');
    });
  });
});

//------------------------------------------------

describe('testing fileReader module that reads there files', () => {
  beforeAll(() => {
    mockData = [
      fs.readFileSync(mockText1, { encoding: 'utf-8' }),
    ];
  });

  test('should show that the data we read from readThreeFiles equals the data in our mockData array', () => {
    fileReader.readThreeFiles(mockText1,  (err, data1) => {
      expect(data1).toEqual(mockData[0]);
      expect(err).toBeNull();
    });
  });
  