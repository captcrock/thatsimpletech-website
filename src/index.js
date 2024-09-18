const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // TODO: Implement email sending or save to database
  console.log(`Received contact form submission:
    Name: ${name}
    Email: ${email}
    Message: ${message}
  `);

  res.status(200).json({ message: 'Message received' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
