// Database Configuration

//Libraries
require("dotenv").config();

module.exports = {
    HOST: process.env.DB_HOST || "localhost",
    USER: process.env.DB_USERNAME || "postgres",
    PASSWORD: process.env.DB_PASSWORD || "admin",
    DB: process.env.DB_DATABASE || "theQuizDB",
    PORT: process.env.DB_PORT || "5432",
    dialect: process.env.DB_DIALECT || "postgres",
    NODE_ENV: process.env.NODE_ENV || "production",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };