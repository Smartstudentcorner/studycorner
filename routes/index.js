const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('pages/index', { title: 'Home' }));
router.get('/about', (req, res) => res.render('pages/about', { title: 'About' }));
router.get('/contact', (req, res) => res.render('pages/contact', { title: 'Contact' }));

module.exports = router;