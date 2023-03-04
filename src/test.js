module.exports = function (fastify) {
  fastify.register(
    (app, options, done) => {
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

      done();
    },
    {
      prefix: "/test",
    }
  );
};
