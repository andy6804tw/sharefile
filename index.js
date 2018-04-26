#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const localtunnel = require('localtunnel');

const PORT = 3000;
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(fs.readFileSync('./' + decodeURI(req.url)));
})


if (process.argv[2] != undefined) {

  // //設定服務監聽localhost:3000(127.0.0.1/:3000)
  server.listen(PORT);
  // //qrcode.generate(something, { small: true });
  
  try {
    var tunnel = localtunnel(PORT, function (err, tunnel) {
      const something = tunnel.url + '/' + encodeURI(process.argv[2]);
      console.log(something);
    });
  }
  catch (err) {
    console.log('Error!');
  }

} else {
  console.log('usage:');
  console.log('       share [file ..]       be sure to your file ');
}




