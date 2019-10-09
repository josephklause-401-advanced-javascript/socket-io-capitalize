const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const fs = require('fs').promises;

socket.on('write-file', data => {
  writeFile(data);
});


function writeFile(data) {
  return fs.writeFile('./data/result.txt', data, { encoding: 'utf8' });
}

module.exports = {
  writeFile
};