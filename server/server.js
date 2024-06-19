// Server

// Libraries
const bodyParser = require("body-parser")
const express = require("express");
const app = express();

// Parse requests of content-type - application/json
app.use(bodyParser.json());
// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

// Error Handling
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({message: message});
});

// Create & Sync Database
const db = require("./models/index.js");
db.setupDB().then(() => {
    db.sequelize.sync().then(() => {
        console.log("Database Synced");
    }).catch((err) => {
        console.log(`Database failed to sync: ${err.message}`)
    });
});

// Apply Server Routes
require("./config/routes.config.js")(app);

// Set Port and Listen for Requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, function() {
    console.log(`The Quiz Server: listening on port ${PORT}`);
});