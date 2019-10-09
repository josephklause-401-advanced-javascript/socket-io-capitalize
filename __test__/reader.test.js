const { readFile } = require('../lib/reader');

describe('reader', () => {

  it('reads from a file', () => {
    readFile(__dirname + '/data/reader-text.txt')
      .then(result => {
        expect(result).toEqual('hello');
      });
  });
});