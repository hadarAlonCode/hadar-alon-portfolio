var nodemailer = require('nodemailer');
require('dotenv').config()

// import { EMAIL, EMAIL_PASSWORD } from '../config/keys'

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    port: 465,
    secure: true,
    pool: true, // This is the field you need to add
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }  
})

 const sendMail = (text, subject, to) => new Promise(resolve => {
    var mailOptions = {
        from: `Hadar Alon Website <hadaraloncode@gmail.com>`,
        to,
        subject,
        text,
    }

    transporter.sendMail(mailOptions, (err, info) => {
        console.log(err, info)
            if (err) {
                resolve(false)
            } else {
                resolve(true)
            }
    })
})



module.exports = sendMail
