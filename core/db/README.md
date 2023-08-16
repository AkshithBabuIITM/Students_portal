# Prisma Client

This package provides a common database access to all apps using [prisma](https://www.prisma.io/).

## What is Prisma ?

Prisma is an open source next-generation ORM. It consists of the following parts:

- Prisma Client: Auto-generated and type-safe query builder for Node.js & TypeScript
- Prisma Migrate: Migration system
- Prisma Studio: GUI to view and edit data in your database

Prisma works with any SQL db (and also partly supports mongodb). We are using a mysql db as it is simple and fast.

Prisma provides a clean and convenient way to model our database, otherwise we had to manually keep track of our current db schema.

To learn more about prisma visit their [docs](https://www.prisma.io/docs)

## Setup

1. Create a `.env` file in the same directory as this file.
2. Copy the following and paste it in the `.env` file

```bash
DATABASE_URL="mysql://root:ZqT2fPJjrFVGJHGqcdrU@containers-us-west-27.railway.app:7745/railway"
```

> Note : The above connection URL is for a dev db (used only for development purposes), connecting with root user in production environment is considered a bad practice

## Schema Structure

Prisma uses `prisma/schema.prisma` file for managing db schema. Here each `model` corresponds to a table in the db.
Learn more about the syntax visit their [docs on schema](https://www.prisma.io/docs/concepts/components/prisma-schema)

There are many ways to structure a database. But we recommend structuring the db using entities and relations, picture a graph connecting entites (nodes) and their relations (edges). We create a separate table ( `model` in prisma) for each entitiy/relation.

For example, we have models for entities like `Student` and `Team`, and model for relation between `Student` and `Team` called `TeamMembership`

## Commands

### Schema Migration (Dev only)

After updating the schema file (`prisma/schema.prisma` file) run the following command to sync schema changes to the db.

```bash
pnpm run migrateDev
```

> Note : This will only migrate schema, it will not migrate the data(it has to be done manually). If you made a beaking change to your schema follow the [best practices](https://www.prisma.io/docs/guides/database/developing-with-prisma-migrate) to ensure painless migration.

### TS Client Genearation

Client is automatically generated when you run `migrateDev` command. Only run this command if you want to regenerate the client (for example after checking out to new branch or after syncing the schema with remote changes to db).

```bash
pnpm run generate
```

### Production migration

// Todo

## Prisma Client

The client that is exported from `index.ts` is a really powerful and type safe query builder.
It is generated based on the models in your Prisma schema.

We use it to perform CRUD operations on our models. And it also supports nested select, transactions, and type inference of expected output.

Refer to the [docs](https://www.prisma.io/docs/concepts/components/prisma-client) to learn more.
