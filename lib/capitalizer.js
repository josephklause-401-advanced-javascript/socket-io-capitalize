const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');

socket.on('capitalize-file', data => {

  data.text = capitalize(data.text);

  socket.emit('file-capitalized', data);
});


function capitalize(string) {
  const capitalizedString = string.toUpperCase();
  return capitalizedString;
}

module.exports = {
  capitalize
};