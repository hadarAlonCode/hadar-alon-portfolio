
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const bodyParser = require('body-parser') 
const port = process.env.PORT || 8080;
const app = express();
const api = require('./server/routes/api.js')

let cors = require('cors')

app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// @ts-ignore
app.use(cors())


// app.use(express.static(path.join(__dirname, 'src'))) 
// app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/', api)

app.listen(port, function () {
  console.log(`Running on port ${port}`)
})