const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');

socket.on('capitalize-file', data => {

  const capitalizedData = capitalize(data);

  socket.emit('file-capitalized', capitalizedData);
});


function capitalize(string) {
  const capitalizedString = string.toUpperCase();
  return capitalizedString;
}

module.exports = {
  capitalize
};