const http = require('http');
const port = 8080;

http.createServer((req, res) => {

  const fs = require('fs');

  if (req.url === '/homepage') {
   fs.readFile('./home.html', 'utf-8', (err, data) => {

    if (err) {
      res.writeHead(400, ('Content-Type', 'text/plain'));
      res.end('invalid url')
    } else {
      res.writeHead(200, ('Content-Type', 'text/html'));
      res.end(data);
    }
   });

  } else if (req.url === '/contactpage') {
    fs.readFile('./contach.html', 'utf-8', (err, data) => {

      if (err) {
        res.writeHead(400, ('Content-Type', 'text/plain'));
        res.end('invalid url');
      } else {
        res.writeHead(200, ('Content-Type', 'text/html'));
        res.end(data)
      }
    });

  }else if (req.url === '/aboutpage') {
    fs.readFile('./about.html', 'utf-8', (err, data) => {

      if (err) {
        res.writeHead(400, ('Content-Type', 'text/plain'));
        res.end('invalid url')
      } else {
        res.writeHead(200, ('Content-Type', 'text/html'));
        res.end(data);
      }
     });

  }else {
    res.writeHead(400, ('Content-Type', 'text/plain'));
    res.end('invalid url')
  }
}).listen(port, () => {
  console.log(`Running on ${port} server`);
});