import express from 'express';
import path from 'path';
import routes from './routes/index';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../server/views')));

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});