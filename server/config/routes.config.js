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
    // One Test
    app.get(`${baseURL}/test/:testID`, function(req, res) {
        main.getOneTest(req, res);
    });

    // New Test
    app.put(`${baseURL}/test/new/:categoryID`, function(req, res) {
        main.newTest(req, res);
    });

    // Edit Test
    app.put(`${baseURL}/test/edit/:testID`, function(req, res) {
        main.editTest(req, res);
    });

    // Delete Test
    app.delete(`${baseURL}/test/del/:testID`, function(req, res) {
        main.deleteTest(req, res);
    });

// Inquiry
    // One Inquiry
    app.get(`${baseURL}/inquiry/:inquiryID`, function(req, res) {
        main.getOneInquiry(req, res);
    });

    // New Inquiry
    app.put(`${baseURL}/inquiry/new/:testID`, function(req, res) {
        main.newInquiry(req, res);
    });

    // Edit Inquiry
    app.put(`${baseURL}/inquiry/edit/:inquiryID`, function(req, res) {
        main.editInquiry(req, res);
    });

    // Delete Inquiry
    app.delete(`${baseURL}/inquiry/del/:inquiryID`, function(req, res) {
        main.deleteInquiry(req, res);
    })

};