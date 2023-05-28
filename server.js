const https = require('http');
const hostname = '127.0.0.1';
const port = 3003;

const server = https.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  }

  if (req.url === '/api/data') {
    let body = JSON.stringify({ message: 'Hello World' });

    res.statusCode === 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(body);
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})