const io = require('socket.io')(7890);


io.on('connection', socket => {

  socket.on('file-read', data => {
    socket.broadcast.emit('capitalize-file', data);
  });

  socket.on('file-capitalized', data => {
    socket.broadcast.emit('write-file', data);
  });

});