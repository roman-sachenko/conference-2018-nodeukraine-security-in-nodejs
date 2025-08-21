const mongoose = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcrypt");
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

    console.log(`[ReDoS] Request received, processing...`);

    const startTime = process.hrtime();
    const isValid = regularExpression.test(title);
    const timeDiff = process.hrtime(startTime)[1];

    console.log(`[ReDoS] Request processed, sending response`);
    return res.send({ isValid, timeDiff });
  },

  /**
   * Brute-Force Attack
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  bruteForceAttack(req, res, next) {
    console.log("[BruteForce] Request received, checking password...");

    const validString = "12385";

    if (validString === req.body.password) {
      console.log("[BruteForce] Password correct, sending success");
      return res.send({});
    }
    console.log("[BruteForce] Password incorrect, sending 401");
    return res.status(401).send({});
  },

  /**
   * Timing attack example
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  timingAttack(req, res, next) {
    console.log('[Timing] Request received, processing...');
    const { password, compareByChar } = req.body;

    let checkFunction = null;
    const NS_PER_SEC = 1e9;
    const validString = `take a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you willtake a look to the sky just before you die, its the last time you will`;

    if (!compareByChar) {
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(validString, salt);
      checkFunction = bcrypt.compareSync.bind(null, password, hash);
    } else {
      checkFunction = compareStringsRegular.bind(null, password, validString);
    }

    const timeStart = process.hrtime();

    const checkResult = checkFunction();

    const timeDiff = process.hrtime(timeStart);
    const fullDiff = timeDiff[0] * NS_PER_SEC + timeDiff[1];

    console.log(fullDiff);

    return res.send({ fullDiff, checkResult });
  },

  /**
   * DB Injections Attacks
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  async dbInjectionGet(req, res, next) {
    console.log('[DBInjection] GET request received, processing...');
    const { User } = mongoose.models;
    const dbQuery = req.query;

    try {
      let query = {};

      if (dbQuery.name) {
        try {
          if (
            typeof dbQuery.name === "string" &&
            dbQuery.name.startsWith("{")
          ) {
            const parsedQuery = JSON.parse(dbQuery.name);
            query = { name: parsedQuery };
          } else {
            query = { name: dbQuery.name };
          }
        } catch (parseError) {
          query = { name: dbQuery.name };
        }
      }

      const userList = await User.find(query);
      return res.send({ userList });
    } catch (err) {
      console.error("Database injection error:", err);
      return res.status(500).send({ error: err.message });
    }
  },

  async dbInjectionDelete(req, res, next) {
    console.log('[DBInjection] DELETE request received, processing...');
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
    console.log('[DBInjection] POST request received, processing...');
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
   * Memory Leak Issue
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  memoryLeak(req, res, next) {
    console.log('[MemoryLeak] Request received, adding to collector...');
    memoryLeakCollector.push({
      date: new Date(),
      headers: req.headers,
    });
    console.log('[MemoryLeak] Response sent');
    return res.send(memoryLeakCollector);
  },

  /**
   * Test Rate limiter
   * @param {} req
   * @param {*} res
   * @param {*} next
   */
  checkRate(req, res, next) {
    console.log('[RateLimit] Request received, checking rate limit...');
    console.log('[RateLimit] Response sent');
    return res.send({ success: true });
  },
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

const compareStringsRegular = (initialString, compareString) => {
  return initialString === compareString;
};
