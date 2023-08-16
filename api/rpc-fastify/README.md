# RPC - Fastify

This app contains an RPC API to be used by both mobops and webops Teams. It uses [fastify](https://www.fastify.io) as the backend framework.

### What is RPC?

RPC - Remote Procedure Call. As the name says it is just a fucntion on the server that you can call by making a request to an endpoint, it either returns the data or throws an error.

### What is Fastify?

Fastify is fast and low overhead web framework, alternative to `expressjs`. We chose it because it is highy efficient at serving requests (follow the best practices on their docs) and also has a rich ecosystem of [plugins](https://www.fastify.io/ecosystem/)

To learn more about Fastify, check out the [Fastify documentation](https://www.fastify.io/docs/latest/).

This project was bootstrapped with [Fastify-CLI](https://www.npmjs.com/package/fastify-cli).

## Available Scripts

In the project directory, you can run:

### `pnpm run dev`

To start the app in dev mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `pnpm run start`

For production mode

### `pnpm run test`

Run the test cases.

## Useful Links :

- [Introdunction to fastify](https://youtu.be/Lk-uVEVGxOA)

- [Fastify Plugin Guide](https://www.fastify.io/docs/latest/Guides/Plugins-Guide/)

- [Fastify with Prisma Guide](https://www.prisma.io/fastify)

> Note: fastify has lot of features and it can overwhelming to to learn all, we want you to just focus on the basics like [creating routes](https://www.fastify.io/docs/latest/Reference/Routes/) (ex: `fastify.get()` , `fastify.post()`) and [route validation](https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/)
