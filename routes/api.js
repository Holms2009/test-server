const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  // socketPath: '/var/run/mysqld/mysqld.sock',git 
  port: 3306,
  user: 'root',
  password: 'nightwatch7358',
  database: 'goldenbananadb'
})

function getAllPlayers(req, res) {
  connection.execute('SELECT * FROM players', (err, results, fields) => {
    res.end(JSON.stringify(results));
  });
}

function addPlayer(req, res) {
  const { playerName, playerRank } = req.body;

  if (!playerName || !playerRank) {
    res.writeHead(400, 'Missing required data');
    res.end();
    return;
  }

  connection.execute(
    `insert into players (playerName, playerRank, isInGuild) values ("${playerName}", "${playerRank}", true)`,
    (err, results) => {
      if (err) {
        console.log(err);
        res.writeHead(500, 'Something went wrong!');
        res.end();
        return;
      }

      console.log(results);
    }
  )
}

function removePlayer(req, res) {
  const { playerId } = req.body;

  if (!playerId) {
    res.writeHead(400, 'Player ID not provided!');
    res.end();
    return;
  }

  connection.execute(
    `DELETE FROM players WHERE playerId = ${playerId}`,
    (err, results) => {
      if (err) {
        console.log(err);
        res.writeHead(500);
        res.end('Something went wrong!');
        return;
      }

      console.log(results);
    }
  )
}


module.exports = { getAllPlayers, addPlayer, removePlayer };