<script>
	
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Parse request bodies as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up the nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'solidernet.client@gmail.com',
    pass: 'solidernet@1990',
  },
});

// Set up the POST route for the form submission
app.post('/send-email', (req, res) => {
  // Extract the form data from the request body
  const { name, email, message } = req.body;

  // Set the email options
  const mailOptions = {
    from: `${name} <${email}>`,
    to: 'solidernet.client@gmail.com',
    subject: 'New Contact Form Submission',
    text: message,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.json({ success: false });
    } else {
      console.log(`Email sent: ${info.response}`
		  );
res.json({ success: true });
}
});
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(Server listening on port ${port});
});
	</script>
	
