require('dotenv').config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname +'/public')));

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'jamesmdang.bui@gmail.com', 
    pass: process.env.EMAIL_PASSWORD, 
  },
});

// API endpoint for handling form submissions
app.post('/api/messages', (req, res) => {
  const { email, name, message } = req.body;

  if (!email || !name || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const mailOptions = {
    from: email,
    to: 'jamesmdang.bui@gmail.com',
    subject: 'New Message from Contact Form',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      return res.status(201).json({ success: 'Message sent successfully' });
    }
  });
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})