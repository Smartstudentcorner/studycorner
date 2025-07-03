const express = require('express');
const path = require('path');
const app = express();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => res.render('pages/index'));
app.get('/about', (req, res) => res.render('pages/about'));
app.get('/contact', (req, res) => res.render('pages/contact'));

// 404
app.use((req, res) => res.status(404).render('404'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Study Corner running at http://localhost:${PORT}`));