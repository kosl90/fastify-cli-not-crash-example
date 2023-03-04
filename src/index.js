const fp = require("fastify-plugin");

const plugin = function (app, options, done) {
  app.get(
    "/",
    {
      schema: {
        querystring: {
          type: "object",
          properties: {
            type: {
              // error here!!!
              anyOf: [],
            },
          },
        },
      },
    },
    async (req) => {
      return "GET /";
    }
  );

  app.post("/", async (req) => {
    return "POST /";
  });

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
