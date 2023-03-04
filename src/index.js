const fp = require("fastify-plugin");
const { routes } = require("./routers");

const plugin = function (app, options, done) {
  app.register(routes);

  // If you comment app.ready, fastify-cli will emit error too
  app.ready(() => {
    console.log(app.printRoutes());
  });

  done();
};

const service = fp(plugin);

module.exports = service;
service.options = {
  exposeHeadRoutes: false,
  logger: {
    level: "info",
    transport: {
      target: "pino-pretty",
    },
  },
  ignoreTrailingSlash: true,
};
