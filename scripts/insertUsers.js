(async () => {
  const mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost/node_conf', { useNewUrlParser: true });

  const User = mongoose.model('User', { name: String });

  const promise = [];
  
  for (let index = 0; index < 10; index++) {
    let user = new User({ name: Math.random().toString(36).substring(7) });
    promise.push(user.save())
  }

  try {
    await Promise.all(promise);
    process.exit();
  } catch (err) {
    process.exit();
  }

})();