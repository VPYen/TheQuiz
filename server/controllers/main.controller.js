// Controller

const db = require("../models/index.js");
const Op = db.Sequelize.Op;

// Model
const Category = db.Category;
const Test = db.Test;
const Inquiry = db.Inquiry;

module.exports = {
    index: function(req, res) {
        console.log("Client request index");
        console.log("Client header: ", req.rawHeaders);
        res.json("Connection Successful");
    },
// Category Functions
// Test Functions
// Inquiry Functions
};


