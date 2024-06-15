// Libraries
const bodyParser = require("body-parser")
let cors = require("cors");
const express = require("express");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081",
    optionsSuccessStatus: 200
};


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// Sync Database
const db = require("./app/models");
db.sequelize.sync();

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});