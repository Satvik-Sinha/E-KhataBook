const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
// import connectDB from './config/db';
const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setApiKey('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');

const app = express();
app.use(cors())

connectDB();

app.use(express.json({extended: false}))


// app.get('/', (req, res) => res.send('API Running'));

app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))

app.post("/send_mail", cors(), async (req, res) => {
	// let { text } = req.body
	const { recipient, sender, subject, text, html } = req.body;

    console.log(req.body);

    sgMail.send({
        to: recipient, 
        from: sender,
        subject: subject,
        text: text,
        html: html,
    }).then(msg => console.log(text));
})


const PORT = process.env.PORT || 4000

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    const path = require("path");

    app.get("*", (req, res) => {

        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    })
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
