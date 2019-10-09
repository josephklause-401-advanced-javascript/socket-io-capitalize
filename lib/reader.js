const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const fs = require('fs').promises;


readFile(process.argv[2])
  .then(data => {
    socket.emit('file-read', data);
  });



function readFile(filePath) {
  return fs.readFile(filePath, { encoding: 'utf8' })
    .then(text => text);
}

module.exports = {
  readFile
};