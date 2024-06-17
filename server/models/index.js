// Libraries
const dbConfig = require("./../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.category = require("./category.model.js")(sequelize, Sequelize);
db.test = require("./test.model.js")(sequelize, Sequelize);
db.inquiry = require("./inquiry.model.js")(sequelize, Sequelize);

// Category <- Test - One to Many
db.category.hasMany(db.test);
db.test.belongsTo(db.category);

// Test <- Inquiry - One to Many
db.test.hasMany(db.inquiry);
db.inquiry.belongsTo(db.test);


module.exports = db;


// Notes
// allowNull default: true
// createdAt default: true
// updatedAt default: true
// id created with primary and auto increment