const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 3000;

// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout/layout');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => res.render('pages/home', { title: 'Home - The Study Corner' }));
app.get('/about', (req, res) => res.render('pages/about', { title: 'About - The Study Corner' }));
app.get('/contact', (req, res) => res.render('pages/contact', { title: 'Contact - The Study Corner' }));
app.get('/nolayout', (req, res) => res.render('pages/nolayout', { title: 'No Layout Page', layout: false }));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));