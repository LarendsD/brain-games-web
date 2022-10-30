import express from 'express';
import path from 'path';
import index from './routes/welcome.js';
import games from './routes/games.js';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT ?? 3000;

app.set('view engine', 'pug');
app.set('views', path.join(process.cwd(), 'views'));

app.use(express.static('public'));
app.use(cookieParser())
app.use('/games', games);
app.use('/', index);

app.listen(port, () => {
  console.log(`Brain games listening on port ${port}`);
});
