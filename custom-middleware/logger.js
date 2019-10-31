const Users = require('../users/userDb.js');


function logger(req, res, next) {
    console.log(`the Logger: [${new Date().toISOString()}] ${req.method} to ${req.url}`);
  
    next();
  };

  