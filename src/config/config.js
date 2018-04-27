// require and configure dotenv, will load vars in .env in process.env
require('dotenv').config();

module.exports = { port: process.env.PORT };
