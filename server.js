const https = require('http');
const fs = require('fs');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3003;

const server = https.createServer((req, res) => {
  const pathName = url.parse(req.url, true).path;

  if (/\./.test(pathName)) {
    const filePatth = __dirname + pathName;
    const readStream = fs.createReadStream(filePatth);

    if (/\.js$/gi.test(pathName)) {
      res.writeHead('200', {
        'Content-Type': 'text/javascript'
      })
    } else if (/\.css$/gi.test(pathName)) {
      res.writeHead('200', {
        'Content-Type': 'text/css'
      })
    }

    readStream.pipe(res);
    return;
  }

  fs.promises.readFile(__dirname + '/index.html')
    .then(data => {
      res.writeHead('200', {
        'Content-Type': 'text/html'
      })

      res.end(data);
    })
    .catch(err => {
      res.writeHead('500');
      res.end(err);
    })
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})