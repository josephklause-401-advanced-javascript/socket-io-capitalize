const { writeFile } = require('../lib/writer');
const { readFile } = require('../lib/reader');

describe('writer', () => {

  it('writes to a new file', () => {
    const data = 'hello';
    writeFile(data)
      .then(() => {
        const result = readFile('./data/result.txt');
        expect(result).toBe(data);
      });
  });
});