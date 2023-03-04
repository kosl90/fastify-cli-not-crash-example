const test = require("./test");

const plugin = function (app, opts, done) {
  test(app);

  done();
};

module.exports.routes = plugin;
