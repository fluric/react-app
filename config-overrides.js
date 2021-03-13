const dotenv = require('dotenv');

module.exports = config => {
  // call dotenv and it will return an Object with a parsed key
  const env = dotenv.config().parsed;

  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[next] = JSON.stringify(env[next]);
    return prev;
  }, {});

  config.plugins.some(p => {
    if (p.definitions && p.definitions['process.env']) {
      p.definitions['process.env'] = { ...envKeys };
      return true;
    }
  });

  return config;
};
