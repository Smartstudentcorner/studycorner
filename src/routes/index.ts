import express from 'express';
import path from 'path';
const router = express.Router();

const viewsPath = path.join(__dirname, '../views');

router.get('/', (_req, res) => {
  res.sendFile(path.join(viewsPath, 'index.html'));
});

router.get('/about', (_req, res) => {
  res.sendFile(path.join(viewsPath, 'about.html'));
});

router.get('/contact', (_req, res) => {
  res.sendFile(path.join(viewsPath, 'contact.html'));
});

export default router;
