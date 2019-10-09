const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const fs = require('fs').promises;

const data = {
  path: process.argv[2],
};

readFile(process.argv[2])
  .then(text => {
    data.text = text;
    socket.emit('file-read', data);
  })
  .catch(error => {
    socket.emit('file-error', error);
  });




function readFile(filePath) {
  return fs.readFile(filePath, { encoding: 'utf8' })
    .then(text => text);
}


module.exports = {
  readFile
};