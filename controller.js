const mongoose = require('mongoose');
const Joi = require('joi');
const memoryLeakCollector = [];

module.exports = {
  /**
   * Regular Expression DOS Attack
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  reDosAttack(req, res, next) {

    const regularExpression = /^([a-zA-Z0-9]+\s?)+$/;
    const { title } = req.body;

    const startTime = process.hrtime();
    const isValid = regularExpression.test(title);
    const timeDiff = process.hrtime(startTime)[1];

    console.log({ isValid, timeDiff });

    return res.send({ isValid, timeDiff });

  },

  /**
   * Brute-Force Attack
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  bruteForceAttack(req, res, next) {
    const validString = '12385';

    if (validString === req.body.password) {
      return res.send({})
    }
    return res.status(401).send({});
  },

  /**
   * DB Injections Attacks
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  async dbInjectionGet(req, res, next) {
    const { User } = mongoose.models;
    const dbQuery = req.query;

    const userList = await User.find({ name: dbQuery });

    return res.send({ userList });
  },

  async dbInjectionDelete(req, res, next) {
    const data = req.body;
    const { User } = mongoose.models;

    try {
      const result = await User.deleteMany(data);

      return res.send({ success: true, result });
    } catch (err) {
      return res.send({ success: false });
    }
  },

  async dbInjectionPost(req, res, next) {
    const data = req.body;
    const { isToValidate } = req.query;
    const { User } = mongoose.models;

    try {

      if (isToValidate) {
        validateUserData(data);
      }

      const user = new User(data);

      await user.save();

      return res.send({ success: true, user });
    } catch (err) {
      return res.send({ success: false, err });
    }
  },

  /**
   * Memory Leak
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  memoryLeak(req, res, next) {
    // memoryLeakCollector.push({ buff: Buffer.alloc(9999, 'djfhjsdkhfsjdhfsdhf') });
    memoryLeakCollector.push({
      date: new Date(),
      headers: req.headers,
    });
    return res.send(memoryLeakCollector);
  },

  /**
   * Test Rate limiter
   * @param {} req 
   * @param {*} res 
   * @param {*} next 
   */
  checkRate(req, res, next) {
    return res.send({ success: true });
  }
};


const validateUserData = (userData) => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
  });

  const { error } = Joi.validate(userData, schema);

  if (error) {
    console.log(error);
    throw error;
  }

  return true;
};