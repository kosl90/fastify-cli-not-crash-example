# Reproduce fastify-cli not crash

reproduce example code for issue [preParsing is undefined not null](https://github.com/fastify/fastify/issues/4511);

## Test

There are two command in package.json `dev` and `dev-cli`,

`dev` use manually written code to start the service -- will crash.

`dev-cli` use `fastify start` to start the service -- will not crash.

## Key points

Here are two key points to not make fastify-cli crash:

- build schema error
- use `app.ready`(if you comment the `app.ready` statement in `src/index.js`, fastify-cli will crash).
