import { Router } from 'express';
import bodyParser from 'body-parser';

const urlencodedParser = bodyParser.urlencoded({ extended: false })

export default Router()
  .get('/', (req, res) => {
    res.render('pages/welcome');
  })

  .get('/start', (req, res) => {
    if (req.cookies.name) {
      return res.redirect('/games')
    }
    res.render('pages/start');
  })

  .get('/about', (req, res) => {
    res.render('pages/about');
  })

  .post('/start', urlencodedParser, (req, res) => {
    if (!req.body.name) {
      return res.render('pages/start', { message: 'Please, write your name!' });
    }
    res.cookie('name', req.body.name);
    res.redirect('/games')
  })
