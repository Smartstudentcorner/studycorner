import express from 'express';
import path from 'path';
const router = express.Router();

router.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/about', (_req, res) => {
  res.sendFile(path.join(__dirname, '../views/about.html'));
});

router.get('/contact', (_req, res) => {
  res.sendFile(path.join(__dirname, '../views/contact.html'));
});

export default router;
