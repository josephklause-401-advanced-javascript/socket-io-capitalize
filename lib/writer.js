const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const fs = require('fs').promises;


socket.on('write-file', data => {
  return writeFile(data.path, data.text)
    .then(() => {
      socket.emit('file-saved');
    })
    .catch(error => {
      socket.emit('file-error', error);
    });
});




function writeFile(path, text) {
  return fs.writeFile(path, text, { encoding: 'utf8' });
}


module.exports = {
  writeFile
};