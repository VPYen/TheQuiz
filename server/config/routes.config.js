// Routes Configuration

const main = require("./../controllers/main.controller.js");
const baseURL = "/api";

module.exports = function(app) {
// Home
    app.get(`${baseURL}/`, function(req, res) {
        main.index(req, res);
    });

// Category
    // One Category
    app.get(`${baseURL}/category/:categoryID`, function(req, res) {
        main.getOneCategory(req, res);
    });

    // All Categories
    app.get(`${baseURL}/categories/all`, function(req, res) {
        main.getAllCategories(req, res);
    });

    // New Category
    app.post(`${baseURL}/categories/new`, function(req, res) {
        main.newCategory(req, res);
    });

    // Edit Category
    app.put(`${baseURL}/categories/edit/:categoryID`, function(req, res) {
        main.editCategory(req, res);
    });

    // Delete Category
    app.delete(`${baseURL}/categories/del/:categoryID`, function(req, res) {
        main.deleteCategory(req, res);
    });

// Test

// Inquiry
};