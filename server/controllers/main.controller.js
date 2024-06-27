// Controller

const db = require("./../models");
const Op = db.Sequelize.Op;

// Model
const Category = db.category;
const Test = db.test;
const Inquiry = db.inquiry;

// Local Functions
function isEmpty(obj) {
    for(let prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return JSON.stringify(obj) === JSON.stringify({});
};

module.exports = {

// Index
    index: function(req, res) {
        console.log("Client request index");
        console.log("Client header: ", req.rawHeaders);
        res.json("Connection Successful");
    },


// Category Functions
    getOneCategory: function(req, res) {
        console.log("Client request getOneCategory");
        console.log("Client header: ", req.rawHeaders);
        // *** get one function here ***
    },

    getAllCategories: async function(req, res) {
        console.log("Client request getAllCategories");
        console.log("Client header: ", req.rawHeaders);
        
        const categories = await Category.findAll()
        .catch(function(err) {
            console.log("getAllCategories error: ", err);
            res.json({error: err.message});
            return;
        });
        if (categories === null) {
            console("getAllCategories null: ", categories)
            res.json({error: "Unable to find or does not exists", type: "getAllCategories"});
        }else {
            console.log("getAllCategories success");
            res.json({success:"Successfully obtained categories", type:"getAllCategories", categories: categories});
        }
    },

    newCategory: async function(req, res) {
        console.log("Client request getAllCategories");
        console.log("Client header: ", req.rawHeaders);
        console.log("Request Body: ", req.body);

        const [category, created] = await Category.findOrCreate({
            where: {
                name: req.body.name
            },
        }).catch(function(err) {
            console.log("newCategory error: ", error);
            res.json({error: err.message, type: "newCategory"});
            return;
        });
        
        if (created) {
            console.log("newCategory success");
            res.json({success:"Successfully created new category", type:"newCategory", category: category});
        }else {
            console.log("newCategory already exists: ", category);
            res.json({success:"Category already exists, returned existing category", type:"newCategory", category: category});
        }
    },

    editCategory: function(req, res) {
        // *** edit function here ***
    },

    deleteCategory: function(req, res) {
        // *** delete function here ***
    },


// Test Functions
    getOneTest: function(req, res) {
        // ** get function here **
    },

    newTest: function(req, res) {
        // ** new function here **
    },

    editTest: function(req, res) {
        // ** edit function here **
    },

    deleteTest: function(req, res) {
        // ** delete function here **
    },


// Inquiry Functions
    getOneInquiry: function(req, res) {
        // ** get function here **
    },

    newInquiry: function(req, res) {
        // ** new function here **
    },

    editInquiry: function(req, res) {
        // ** edit function here **
    },

    deleteInquiry: function(req, res) {
        // ** delete function here **
    }
    
};


