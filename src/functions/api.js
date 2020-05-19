import { MAIL_API } from "../tools/routes/routes.js"
import axios from 'axios'


export const sendContactForm = (body) => new Promise(resolve => {
    
    axios.post(`${MAIL_API}`, body ).then(res => {
        const {
            ok,
            result
        } = res.data
        const output = {
            ok,
            result
        }
        resolve(output)
    }).catch(err => {
        resolve({ ok: false })
    })
})