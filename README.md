This is a [Node JS](https://nodejs.org) boilerplate with [`Express`](https://expressjs.com).

## Getting Started

- install dependencies `npm install` or `yarn install`
- open file `.env.example` and copy all content
- create and open file `.env` and paste here
- create database with called `db_express`
- run `npm run migrate` or `yarn migrate` to run database migration
- run `npm run seed` or `yarn seed` to run database seeder
- and start project with command `npm run dev` or `yarn dev`
- finally, test request with POSTMAN or run `http://localhost:5003/api-docs/#/` for swagger
- postman collection `https://www.getpostman.com/collections/83b0c662b9cf84f1a89b`

## Feature
- Login
- Logout
- Profile
- Role
- List Admin
- Logger
- Unit Testing
- Scheduler (Backup DB)
- Swagger
- UI Error Tracking

## Package used in this project
- [Express](https://expressjs.com/)
- [Axios](https://www.npmjs.com/package/axios)
- [Body Parser](https://github.com/expressjs/body-parser)
- [Cookie Parser](https://www.npmjs.com/package/cookie-parser)
- [CORS](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv) for Environment Variable
- [Express Validator](https://express-validator.github.io/docs/) for Request Validator
- [HTTP Status](https://www.npmjs.com/package/http-status) for Request Response Code
- [JWT](https://www.npmjs.com/package/jsonwebtoken) for Authentication
- [Morgan](https://www.npmjs.com/package/morgan) for Logger
- [MySQL 2](https://www.npmjs.com/package/mysql2) for Database
- [Sequelize](https://sequelize.org/docs/v6/getting-started/) for ORM
- [Sequelize CLI](https://github.com/sequelize/cli) for Sequelize Command
- [Node CRON](https://www.npmjs.com/package/node-cron) for Scheduler
- [Swagger JSDoc](https://www.npmjs.com/package/swagger-jsdoc)
- [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express)
- [UUID](https://www.npmjs.com/package/uuid)
- [Rollbar Error Tracking](https://docs.rollbar.com/docs/nodejs)

## Unit Testing
- [Jest](https://jestjs.io/)
- [Supertest](https://github.com/visionmedia/supertest)
- run test with command `npm run test-watch` or `yarn test-watch`

## Linter
- [ESLint](https://eslint.org/)
- [ESLint Config Google](https://www.npmjs.com/package/eslint-config-google)
- run linter with command `npm run lint` or `yarn lint`

your feedback and contributions are welcome!