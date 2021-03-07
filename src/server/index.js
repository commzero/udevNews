var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

// start app
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use(express.static('dist'));

console.log(__dirname);

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?';
const api = '094d888cadd7813adc2fdb1735c9c86d';

let userInp = [];

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
});

app.post('/api', async function(req, res) {
    userInp = req.body.url;
    const apiURL = `${baseURL}key=${api}&url=${userInp}&lang=en`;
    const response = await fetch(apiURL);
    const data = await response.json();
    res.send(data);
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});
