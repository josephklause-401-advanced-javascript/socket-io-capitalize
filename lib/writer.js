const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const fs = require('fs').promises;


socket.on('write-file', data => {
  writeFile(data.path, data.text);
});


function writeFile(path, text) {
  return fs.writeFile(path, text, { encoding: 'utf8' });
}

module.exports = {
  writeFile
};