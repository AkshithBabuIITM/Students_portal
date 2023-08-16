import { FastifyPluginAsync } from "fastify";
import fp from "fastify-plugin";
// import type { PrismaClient } from "core-db";
import { client } from "core-db";
// import type PrismaClient from "core-db"
declare module "fastify" {
  interface FastifyInstance {
    prisma: typeof client;
  }
}

const prismaPlugin: FastifyPluginAsync = fp(async (server, options) => {
  const prisma = client;
  await prisma.$connect();
  // Make Prisma Client available through the fastify server instance: server.prisma
  server.decorate("prisma", prisma);
  server.addHook("onClose", async (server) => {
    await server.prisma.$disconnect();
  });
});
export default prismaPlugin;
