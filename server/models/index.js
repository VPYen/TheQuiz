// Libraries
const pg = require("pg");
const dbConfig = require("./../config/db.config.js");
const Sequelize = require("sequelize");

// Create DB if not exist
async function setupDB(){
    if (dbConfig.NODE_ENV === "development") {
        return console.log("In production environment - skipping DB creation");
    }

    const client = new pg.Client({
        host: dbConfig.HOST,
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        port: dbConfig.PORT
    });

    await client.connect();
    
    const res = await client.query(`SELECT datname FROM pg_catalog.pg_database WHERE datname = '${dbConfig.DB}'`);
    
    if (res.rowCount === 0) {
        console.log(`${dbConfig.DB} database not found. Creating database.`);
        await client.query(`CREATE DATABASE "${dbConfig.DB}";`);
        console.log(`Created database ${dbConfig.DB}.`);
    } else {
        console.log(`${dbConfig.DB} database already exists.`);
    }
    
    await client.end();
}

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

db.setupDB = setupDB;
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