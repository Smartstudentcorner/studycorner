const express = require('express');
const app = express();
const path = require('path');

const variables = require('./variables'); // ⬅️ Load shared variables

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

// Inject variables into all views
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

// Start Server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));