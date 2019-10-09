const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');

socket.on('capitalize-file', data => {

  try {

    const text = capitalize(data.text);
    data.text = text;
    socket.emit('file-capitalized', data);

  }
  catch(error) {
    socket.emit('file-error', error);
  }

});




function capitalize(string) {
  if((typeof string) !== 'string') {
    throw 'data is not a string';
  }
  const capitalizedString = string.toUpperCase();
  return capitalizedString;
}


module.exports = {
  capitalize
};