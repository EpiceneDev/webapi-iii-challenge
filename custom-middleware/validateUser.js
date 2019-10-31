const Users = require('../users/userDb.js');

function validateUser(req, res, next) {
    const name = req.headers.name;
    const newUser = req.headers.body;
  
    if(!name) {
      res.status(400).json({ message: "missing required name field" })
    } else if(!newUser) {
      res.status(400).json({ message: "missing user data" })
        next();
      } else {
        res.status(400).json({ you: 'cannot pass!!' })
      }
    next();
  };

module.exports = validateUser;