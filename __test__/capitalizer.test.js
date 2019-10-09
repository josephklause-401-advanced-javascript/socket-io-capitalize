const { capitalize } = require('../lib/capitalizer');

describe('capitalize', () => {

  it('capitalizes a give string', () => {
    const string = 'hi i am joe';
    const result = capitalize(string);
    expect(result).toBe('HI I AM JOE');
  });
});