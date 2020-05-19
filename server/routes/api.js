
const express = require('express') //install
const router = express.Router()
const sendMail = require('../functions/sendMail.js')


router.put('/mail', async (req, res) => {

    let text = req.body.text
    let subject = req.body.subject

    let mail = await sendMail(text, subject, "hadaralon3@gmail.com")

    if(mail){
      res.send({ ok: true, result: 'messege received!' })
    }else{
      res.send({ ok: false, result: 'messege error' })
    }
})

module.exports = router
