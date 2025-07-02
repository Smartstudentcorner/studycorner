import express from 'express';
import path from 'path';
import indexRoutes from './routes/index';
import apiRoutes from './routes/api';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'views')));
app.use('/', indexRoutes);
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
