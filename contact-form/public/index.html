const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // To serve static files like HTML, CSS, JS

// POST route to handle form submissions
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;

  // Log the form data to a file or handle it as needed
  const formData = `Name: ${name}, Email: ${email}, Message: ${message}\n`;
  fs.appendFile('formData.txt', formData, (err) => {
    if (err) throw err;
    console.log('Form data saved.');
  });

  res.json({ message: 'Form submitted successfully!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
