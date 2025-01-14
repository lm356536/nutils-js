let modules = {};
let files = require.context('./lib', true, /\.js$/);
files.keys().forEach((key) => {
  let name = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
  modules[name] = files(key);
});

module.exports = modules;
