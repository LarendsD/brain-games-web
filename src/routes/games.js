import { Router } from "express"
import brainEven from '../logic/brain-even.js';
import bodyParser from 'body-parser';
import { encrypt, decrypt } from "../logic/helpers/secure.js";
import brainCalc from "../logic/brain-calc.js";
import brainGcd from "../logic/brain-gcd.js";
import brainProgression from "../logic/brain-progression.js";
import brainPrime from "../logic/brain-prime.js";

const urlencodedParser = bodyParser.urlencoded({ extended: false })

export default Router()
  .use((req, res, next) => {
    if (!req.cookies.name) {
      return res.render('pages/start', { message: 'For play games, please, write your name!' })
    }
    next();
  })

  .get('/', (req, res) => {
    const name = req.cookies.name;
    res.render('pages/games', { name });
  })

  .post('/check', urlencodedParser, (req, res) => {
    const { encryptAnswer } = req.cookies;
    const correctAnswer = decrypt(encryptAnswer);
    const { answer } = req.body;
    const ref = req.get('Referrer');
    if (correctAnswer === answer) {
      return res.redirect(ref)
    }
    const { name } = req.cookies;
    res.render('pages/games/results/failed', { correctAnswer, answer, name, ref });
  })

  .get('/brain-even', (req, res) => {
    const { question, answer } = brainEven();
    const encryptAnswer = encrypt(answer);
    res.cookie('encryptAnswer', encryptAnswer)
    res.render('pages/games/brain-even', { question });
  })

  .get('/brain-calc', (req, res) => {
    const { question, answer } = brainCalc();
    const encryptAnswer = encrypt(answer);
    res.cookie('encryptAnswer', encryptAnswer);
    res.render('pages/games/brain-calc', { question });
  })

  .get('/brain-gcd', (req, res) => {
    const { question, answer } = brainGcd();
    const encryptAnswer = encrypt(answer);
    res.cookie('encryptAnswer', encryptAnswer);
    res.render('pages/games/brain-gcd', { question });
  })

  .get('/brain-progression', (req, res) => {
    const { question, answer } = brainProgression();
    const encryptAnswer = encrypt(answer);
    res.cookie('encryptAnswer', encryptAnswer);
    res.render('pages/games/brain-progression', { question });
  })

  .get('/brain-prime' , (req, res) => {
    const { question, answer } = brainPrime();
    const encryptAnswer = encrypt(answer);
    res.cookie('encryptAnswer', encryptAnswer);
    res.render('pages/games/brain-prime', { question });
  })