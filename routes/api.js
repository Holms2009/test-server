const fs = require('fs');
const appRoot = require('app-root-path');

const usersPath = appRoot + '/data/users.json';

function sendAllUsers(req, res) {
  const data = fs.readFileSync(usersPath, "utf-8");
  const users = JSON.parse(data);

  res.send(users);
}

module.exports = { sendAllUsers };