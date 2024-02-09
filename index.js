const express = require('express');
const localtunnel = require('localtunnel');

const port = 8000;

// Create and setup express app
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Declare post route
app.post('/', (req, res) => {
    console.log('--------------------------');
    console.log('POST request recieved ----');
    console.log(JSON.stringify(req.body));
    console.log('\n')

    // Respond with OK
    res.send({Status: 'OK'});
});

// Declare post route
app.get('/', (req, res) => {
    console.log('--------------------------');
    console.log('GET request recieved -----');
    console.log('\n')

    // Respond with OK
    res.send({Status: 'OK'});
});


app.listen(port, () => {
  console.log('Local server started on port:', port)
});

localtunnel({ port: port })
  .then(tunnel => { console.log('Listening on:', tunnel.url) })
  .catch(err => { console.log('Failed to start public tunnel!', err) });
