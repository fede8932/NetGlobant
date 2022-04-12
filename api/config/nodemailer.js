const { createTransport } = require("nodemailer")

const { EMAIL, GOOGLE_PASSWORD } = process.env

const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: EMAIL,
        pass: GOOGLE_PASSWORD
    }
})

module.exports = { transporter }