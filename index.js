const express = require('express');
const { getAllPlayers, addPlayer } = require('./routes/api');

const server = express();
const port = 3003;

server.use(express.static(__dirname + '/public'));

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

server.get('/api/get-players', getAllPlayers);
server.get('/api/add-player', addPlayer);

server.listen(port, () => {
  console.log('Server working on port 3003');
})