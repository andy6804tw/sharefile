const localtunnel = require('localtunnel');

const config = require('./../config/config');

const getURL = (fileName) => {
  if (fileName != undefined) {
    // create tunnel
    var tunnel = localtunnel(config.port, function (err, tunnel) {
      const something = tunnel.url + '/' + encodeURI(fileName);
      console.log(something);
    });
  } else {
    console.log('usage:');
    console.log('       sharefile [file ..]       be sure to your file ');
  }
}

module.exports = { getURL };
