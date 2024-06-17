// Routes Configuration

const main = require("./../controllers/main.controller.js");
const baseURL = "/api";

module.exports = function(app) {
// Home
    app.get(baseURL + "/", function(req, res) {
        main.index(req, res);
    });
};