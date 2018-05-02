#!/usr/bin/env node
const express = require('express');
const fs = require('mz/fs');
const path = require('path');

const creatTunnel = require('./src/lib/creatTunnel');
const config = require('./src/config/config');

const app = express();

app.use(async (req, res) => {
  const fpath = path.join(__dirname, req.path);
  if (await fs.exists(fpath)) {
    var stat = await fs.stat(fpath)
    if (await stat.isFile()) {
      res.set(path.extname(fpath));
      fs.createReadStream(fpath).pipe(res);
    } else if (await stat.isDirectory()) {
      res.send('fpath=' + fpath + ' is a directory');
    }
  } else {
    res.send('File not found! Be sure your Filename Extension. ex: .png .pdf');
  }
})


// get URL link
creatTunnel.getURL(process.argv[2]).then((result) => {
  console.log(result);
});

app.listen(config.port);


// catch Exception
process.on('uncaughtException', (err) => {
  console.log('whoops! There was an connection error. Please wait a moment and retry it !');
  process.exit(1);
});
