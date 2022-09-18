# Meet.js Białystok: Hexagonal architecture in NestJS

## Requirements

Before starting the project, please make sure that you have installed:

- Docker
- Node.js (16.17.0)
- [NVM](https://github.com/nvm-sh/nvm)

## Running the project

1. Open terminal and navigate to the project directory:

```
cd meetjs-nestjs-hexagonal
```

1. Start the database (PostgreSQL):

```
docker-compose up
```

The database is listening on port 5432.

1. Use Node.js defined by NVM:

```
nvm use
```

1. Install NPM packages:

```
npm install
```

1. Run Prisma migrations:

```
npm run db:migrate
```

Having executed this command there should be `redirects` table in the database.

1. Start NestJS project:

```
npm run start
```
