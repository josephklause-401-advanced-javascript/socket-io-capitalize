const { writeFile } = require('../lib/writer');
const { readFile } = require('../lib/reader');

describe('writer', () => {

 

  it('writes to a new file', () => {
    const path = __dirname + '/data/writer-text.txt';
    const data = 'hi';

    writeFile(path, data)
      .then(() => readFile(path))
      .then(result => {
        expect(result).toEqual(data);
      });
  });
});