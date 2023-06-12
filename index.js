const express = require('express');
const cors = require('cors');

const { getAllPlayers, addPlayer, removePlayer } = require('./routes/api');

const server = express();
const port = 3003;

server.use(express.static(__dirname + '/public'));
server.use(express.json());
server.use(cors({
  origin: '*'
}))

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

server.get('/api/get-players', getAllPlayers);
server.post('/api/add-player', addPlayer);
server.post('/api/remove-player', removePlayer);

server.listen(port, () => {
  console.log('Server working on port 3003');
})