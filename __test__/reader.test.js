const { readFile } = require('../lib/reader');

describe('reader', () => {

  it('reads from a file', () => {
    readFile('./data/text-file.txt')
      .then(result => {
        expect(result).toBe('text to use in program');
      });
  });
});