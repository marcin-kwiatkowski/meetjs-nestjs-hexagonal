# Meet.js Białystok: Hexagonal architecture in NestJS

## Requirements

Before starting the project, please make sure that you have installed:

- [Docker](https://www.docker.com)
- [NVM](https://github.com/nvm-sh/nvm)

## Running the project

1. Open terminal and navigate to the project directory:

```
cd meetjs-nestjs-hexagonal
```

2. Start the database (PostgreSQL):

```
docker-compose up
```

The database is listening on port 5432.

3. Use Node.js defined by NVM:

```
nvm use
```

It may happen that you don't have the required Node.js version. NVM will guide you to install it.

4. Install NPM packages:

```
npm install
```

5. Run Prisma migrations:

```
npm run db:migrate
```

Having executed this command there should be `redirects` table in the database.

6. Start NestJS project:

```
npm run start
```
