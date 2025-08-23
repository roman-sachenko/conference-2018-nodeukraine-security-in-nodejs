const express = require('express');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');

const controller = require('./controller');

const appRoute = express.Router();
const checkRoute = express.Router({ strict: true });
const app = express();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/node_ukraine_db';

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
});


appRoute
  .get('/db-injection/', controller.dbInjectionGet)
  .get('/memory-leak/', controller.memoryLeak)
  .delete('/db-injection/', controller.dbInjectionDelete)
  .post('/db-injection/', controller.dbInjectionPost)
  .post('/re-dos/', controller.reDosAttack)
  .post('/brute-force/', controller.bruteForceAttack)
  .post('/timing/', controller.timingAttack)
  .post('/timing-db/', controller.timingAttackDB);

checkRoute
  .get('/rate', controller.checkRate);


app
  .use('/check/rate', apiLimiter)
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use('/attacks', appRoute)
  .use('/check', checkRoute);


mongoose.connect(MONGODB_URI);

mongoose.model('User', { name: String, password: String });

app.listen(PORT, () => {
  console.log(`Hell yeah on port ${PORT}`);
});
