const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout/layout'); // Using views/layout/layout.ejs as default

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('pages/home', {
    title: 'The Study Corner'
  });
});

app.get('/nolayout', (req, res) => {
  res.render('pages/nolayout', {
    title: 'Page Without Layout',
    layout: false
  });
});

// Server start
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
