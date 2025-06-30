const express = require('express');
const path = require('path');
const app = express();

// Sample API route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Node backend!' });
});

// Serve static React files
app.use(express.static(path.join(__dirname, 'client/build')));

// React fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));