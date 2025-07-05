const express = require('express');
const path = require('path');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('pages/home', { title: 'Home - Study Corner', notificationCount: 3 });
});

app.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About - Study Corner' });
});

app.get('/contact', (req, res) => {
  res.render('pages/contact', { title: 'Contact - Study Corner' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Study Corner running at http://localhost:${PORT}`);
});
