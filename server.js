const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const userRouter = require("./users/userRouter.js");
const postRouter = require("./posts/postRouter.js");
const logger = require("./custom-middleware/logger")

const server = express();

//custom middleware

// function dateLogger(req, res, next) {
//   console.log(new Date().toISOString());

//   next();
// };



// Global middleware
server.use(helmet()); ///third party
server.use(express.json());  //built-in
// server.use(dateLogger); // custom middleware
server.use(logger); //
server.use(morgan('server'))

server.use('./api/users', userRouter);
server.use('./api/posts', postRouter);

server.get('/', (req, res) => {
    // const nameInsert = req.name ? `${req.name}` : '';
    // res.send(`
    //   <h1>Welcome ${nameInsert} to user/posts!</h1>
    //   `);
    res.send(`<h1>Let's code!</h1>`)
});


module.exports = server;
