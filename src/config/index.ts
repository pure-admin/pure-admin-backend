import * as dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  port: parseInt(process.env.PORT, 10),
  databaseURL: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtAlgorithm: process.env.JWT_ALGO,
  options: {
    swaggerDefinition: {
      info: {
        description: "pure-admin官方后端",
        title: "Swagger",
        version: require("../../package.json").version,
      },
      host: `localhost:${parseInt(process.env.PORT, 10)}`,
      basePath: "/",
      produces: ["application/json", "application/xml"],
      schemes: ["http", "https"],
      securityDefinitions: {
        JWT: {
          type: "apiKey",
          in: "header",
          name: "Authorization",
          description: "Bearer Authorization",
        },
      },
    },
    route: {
      url: "./swagger-ui.html",
      // swagger文件 api
      docs: "/swagger.json",
    },
    // app absolute path
    basedir: __dirname,
    // path to the API handle folder
    files: ["../router/*.ts"],
  },
  logs: {
    level: process.env.LOG_LEVEL || "silly",
  },
  agenda: {
    dbCollection: process.env.AGENDA_DB_COLLECTION,
    pooltime: process.env.AGENDA_POOL_TIME,
    concurrency: parseInt(process.env.AGENDA_CONCURRENCY, 10),
  },
  mysql: {
    host: "localhost",
    charset: "utf8_general_ci",
    user: "root",
    password: "123456789",
  },
  mongodb: {},
  sqlite: {},
  api: {
    prefix: "/api",
  },
  emails: {
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
};
