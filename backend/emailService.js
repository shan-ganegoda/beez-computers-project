const nodemailer = require('nodemailer');

// Reusable email sending function
const sendEmail = async (to, subject, text,htmls) => {
    try {
      // Create a transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'yourEmail', // Your email address
          pass: 'YourPassword' // Your email password from google app passwords
        }
      });
  
      // Define mail options
      const mailOptions = {
        from: 'YourEmail',  // Sender's email
        to,                           // Receiver's email passed as argument
        subject,                      // Subject passed as argument
        text,                          // Email body passed as argument
        html: htmls
      };
  
      // Send email
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent: ' + info.response);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  
  module.exports = sendEmail;