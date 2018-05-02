const http = require('http');
const fs = require('fs');

const creatTunnel = require('./src/lib/creatTunnel');
const config = require('./src/config/config');

// create server
const server = http.createServer(function (req, res) {
  if (req.url != '/favicon.ico' && req.url != '/robots.txt') {
    res.writeHead(200);
    // file system
    res.end(fs.readFileSync('./' + decodeURI(req.url)));
  }
})

// start server
server.listen(config.port);

// get URL link
creatTunnel.getURL(process.argv[2]).then((result) => {
  console.log(result);
});

// catch Exception
process.on('uncaughtException', (err) => {
  console.log('whoops! There was an connection error. Please wait a moment and retry it !');
  process.exit(1);
});
