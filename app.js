const express = require('express');
const path = require('path');
const app = express();

const variables = require('./variables');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Global Variables
app.use((req, res, next) => {
  res.locals.siteTitle = variables.siteTitle;
  res.locals.creatorName = variables.creatorName;
  res.locals.socialLinks = variables.socialLinks;
  res.locals.playStoreUrl = variables.playStoreUrl;
  res.locals.studyQuote = variables.studyQuote;
  next();
});

// Routes
app.get('/', (req, res) => {
  res.render('pages/home', { title: 'Home' });
});
app.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About' });
});
app.get('/contact', (req, res) => {
  res.render('pages/contact', { title: 'Contact' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});