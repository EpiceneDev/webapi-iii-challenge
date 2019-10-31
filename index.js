const express = require('express');
const server = express();

// const userRouter = require("./users/userRouter.js");
// const postRouter = require("./posts/postRouter.js");


server.use(express.json());
// server.use('./api/users', userRouter);
// server.use('./api/posts', postRouter);


server.get('/', (req, res) => {
    res.send('Server is talking!');
});


server.listen(9000, () => console.log('\n=== API on port 9000 ===\n'));