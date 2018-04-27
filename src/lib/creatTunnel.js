const localtunnel = require('localtunnel');

const config = require('./../config/config');

const getURL = (fileName) => {
  return new Promise((resolve, reject) => {
    if (fileName != undefined) {
      // create tunnel
      var tunnel = localtunnel(config.port, function (err, tunnel) {
        const tunnelURL = tunnel.url + '/' + encodeURI(fileName);
        resolve(tunnelURL);
      });
    } else {
      console.log('usage:');
      console.log('       sharefile [file ..]       be sure to your file ');
    }
  });
}

module.exports = { getURL };
