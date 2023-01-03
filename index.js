const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// create an SMTP transport
const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.PORT,
  auth: {
    user: 'deepak.studentid2030@gmail.com',
    pass: process.env.PASS
  }
});

app.post('/send-email', (req, res) => {
  // send the email

  transport.sendMail({
    from: 'deepak.studentid2030@gmail.com',
    to: ["harsh.singh9055@gmail.com", "nomercyhunters@gmail.com"],
    subject: 'Hello',
    text: "Hello, world!  bhai kessa ",
    html: '<p>Hello, world! bhai kessa</p>'
  }, (error, info) => {
    if (error) {
      console.log(error);
      res.send('Error occurred');
      return process.exit(1);
    }
    console.log('Message sent successfully!');
    res.send('Email sent');
  });
});

app.listen(3000, () => console.log('Server is listening on port 3000'));
