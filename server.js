const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Study Corner!');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Study Corner API is running!' });
});

app.listen(PORT, () => {
  console.log(`Study Corner is running on http://localhost:${PORT}`);
});
