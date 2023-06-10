const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  // socketPath: '/var/run/mysqld/mysqld.sock',
  port: 3306,
  user: 'root',
  password: 'nightwatch7358',
  database: 'goldenbananadb'
})

function getAllPlayers(req, res) {
  connection.execute('SELECT * FROM players', (err, results, fields) => {
    res.end(JSON.stringify(results));
  });

  connection.end();
}

function addPlayer(req, res) {
  // connection.execute(
  //   'insert into players (playerName, playerRank, isInGuild) values ("Дошик", "Владелец", true)',
  //   (err, results) => {
  //     console.log(err);
  //     console.log(results);
  //   }
  // )

  connection.end();
}


module.exports = { getAllPlayers, addPlayer };