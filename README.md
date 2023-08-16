# Students Portal App

This repository contains all code for students portal application.
We are using turborepo to build and manage the apps / pacakges in this repo.

## What is a Turborepo

Turborepo is a blazing fast build system for JavaScript/TypeScript monorepos ( codebases containing multiple projects, often using multiple frameworks, in a single unified code repository).

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a packages manager. It includes the following packages/apps:

### Core (`/core` directory)

These are core packages critical to our app. This directory contains the follwing packages

- auth: contains functions to interact with ldap server
- db: exports a prisma client used to interact with mysql db
- email: contains functions send a mail (via gmail)
- uploads: conatins functions to upload and download files generate by users

### API (`/api` directory)

Here the backend team will build a common api to interact with core sevices, to be used by both webops and mobops team. Inside this directory we have one app called `rpc-fastify` which uses fastify as the backend framework.

### Web (`/web` directory)

Here the frontend team will build the web app for our students portal. Inside this directory we have `react-app` app, which uses react as frontend framework.

### Shared Packages (`/shared` directory)

Here we place the packages that can be shared by all packages, It conatins the follwing packages:

- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

More Details about each app/package can be found in the corresponding readme.

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

This repository is created by running `npx create-turbo@latest` command, and uses PNPM as the package manager.

Make sure you install pnpm before proceeding. PNPM can be installed by the following command

```
npm install -g pnpm
```

### Install dependencies

Ater cloning the repo, navigate to repo root and run the following command

```
pnpm install
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm run dev
```

### Build

To build all apps and packages, run the following command:

```
pnpm run build
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
pnpm dlx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpm dlx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/features/pipelines)
- [Caching](https://turborepo.org/docs/features/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/features/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
