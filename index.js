
const server = require('./server.js');


// server.get('/', (req, res) => {
//     const nameInsert = (req.name) ? `${req.name}` : '';
//     res.send(
//         `<h1>Welcome ${nameInsert} to here!</h1>`
        
//         );
// });


server.listen(9000, () => console.log('\n=== API on port 9000 ===\n'));