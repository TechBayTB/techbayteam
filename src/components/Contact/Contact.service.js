import axios from 'axios'

export const sendMail = (body) => {
    return new Promise((resolve, reject) => {
        axios.post('https://techbay-email-api.onrender.com/email', body)
            .then((res) => {
                resolve(res.data)
            }).catch((error) => {
                reject('Error : ', error)
            })
    })
}