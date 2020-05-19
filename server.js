
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const bodyParser = require('body-parser') 
const port = process.env.PORT || 8080;
const app = express();
const sendMail = require('./server/functions/sendMail')

let cors = require('cors')

app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// @ts-ignore
app.use(cors())




app.post('/mail', async (req, res) => {

    let text = req.body.text
    let subject = req.body.subject

    let mail = await sendMail(text, subject, "hadaralon3@gmail.com")

    if(mail){
      res.send({ ok: true, result: 'messege received!' })
    }else{
      res.send({ ok: false, result: 'messege error' })
    }
})

// app.use(express.static(path.join(__dirname, 'src'))) 
// app.use(express.static(path.join(__dirname, 'node_modules')))



app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port, function () {
  console.log(`Running on port ${port}`)
})