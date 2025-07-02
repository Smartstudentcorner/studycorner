
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// API
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Serve frontend
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
