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
    getOneCategory: async function(req, res) {
        console.log("Client request getOneCategory");
        console.log("Client header: ", req.rawHeaders);
        
        const category = await Category.findByPk(req.params.categoryID)
        .catch(function(err) {
            console.log("getOneCategory error: ", err);
            res.json({error: err.message});
            return;
        });
        if (category === null) {
            console.log("getOneCategory null: ", category);
            res.json({error: "Unable to find or does not exist", type: "getOneCategory"});
        }else {
            console.log("getOneCategory success");
            res.json({success: "Successfully obtained category", type: "getOneCategory", category: category});
        }

    },

    getAllCategories: async function(req, res) {
        console.log("Client request getAllCategories");
        console.log("Client header: ", req.rawHeaders);
        
        const categories = await Category.findAll()
        .catch(function(err) {
            console.log("getAllCategories error: ", err);
            res.json({error: err.message, type: "getAllCategories"});
            return;
        });
        if (categories === null) {
            console("getAllCategories null: ", categories)
            res.json({error: "Unable to find or does not exist", type: "getAllCategories"});
        }else {
            console.log("getAllCategories success");
            res.json({success:"Successfully obtained categories", type:"getAllCategories", categories: categories});
        }
    },

    newCategory: async function(req, res) {
        console.log("Client request newCategory");
        console.log("Client header: ", req.rawHeaders);
        console.log("Request Body: ", req.body);

        const [category, created] = await Category.findOrCreate({
            where: {
                name: req.body.name
            },
        }).catch(function(err) {
            console.log("newCategory error: ", err);
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

    editCategory: async function(req, res) {
        console.log("Client request editCategory");
        console.log("Client header: ", req.rawHeaders);
        console.log("Request Body: ", req.body);

        const category = await Category.update(req.body, {
            where: {id: req.params.categoryID},
            return: true,
            plain: true
        }).catch(function(err) {
            console.log("editCategory error: ", err);
            res.json({error: err.message, type: "editCategory"});
            return;
        });
        console.log("editCategory success: ", category);
        res.json({success: "Category updated", type: "editCategory", category: category});
    },

    deleteCategory: async function(req, res) {
        console.log("Client request deleteCategory");
        console.log("Client header: ", req.rawHeaders);

        await Category.destroy({
            where: {id: req.params.categoryID}
        }).catch(function(err) {
            console.log("deleteCategory error: ", err);
            res.json({error: err.message, type: "deleteCategory"});
            return;
        });
        console.log("deleteCategory success");
        res.json({success: "Category deleted", type: "deleteCategory"});
    },


// Test Functions
    getOneTest: async function(req, res) {
        console.log("Client request getOneTest");
        console.log("Client header: ", req.rawHeaders);

        const test = await Test.findByPk(req.params.testID)
        .catch(function(err) {
            console.log("getOneTest error: ", err);
            res.json({error: err.message, type: "getOneTest"});
            return;
        });
        if (test === null) {
            console.log("getOneTest null: ", test);
            res.json({error: "Could not find or does not exist", type: "getOneTest"})
        }else {
            console.log("getOneTest success");
            res.json({success: "Successfully obtained test", type: "getOneTest", test: test});
        }
    },

    newTest: async function(req, res) {
        console.log("Client request newTest");
        console.log("Client header: ", req.rawHeaders);

        const [test, created] = await Test.findOrCreate({
            where: {
                name: req.body.name,
                description: req.body.description,
            },
        }).catch(function(err) {
            console.log("newTest error: ", err);
            res.json({error: err.message, type: "newTest"});
            return;
        });
        if (created) {
            console.log("newTest success");
            res.json({success: "Successfully created new test", type: "newTest", test: test});
        }else {
            console.log("newTest already exists: ", test);
            res.json({success: "Test already exists, returned existing test", type: "newTest", test: test});
        }
    },

    editTest: async function(req, res) {
        console.log("Client request editTest");
        console.log("Client header: ", req.rawHeaders);

        const test = await Test.update(req.body, {
            where: {id: req.params.testID},
            return: true,
            plain: true
        }).catch(function(err) {
            console.log("editTest error: ", err);
            res.json({error: err.message, type: "editTest"});
            return;
        });
        console.log("editTest success");
        res.json({success: "Test updated", type: "editTest", test: test});
    },

    deleteTest: async function(req, res) {
        console.log("Client request deleteTest");
        console.log("Client header: ", req.rawHeaders);

        await Test.destroy({
            where: {id: req.params.testID}
        }).catch(function(err) {
            console.log("deleteTest error: ", err);
            res.json({error: err.message, type: "deleteTest"});
            return;
        });
        console.log("deleteTest success");
        res.json({success: "Test deleted", type: "deleteTest"});

    },


// Inquiry Functions
    getOneInquiry: async function(req, res) {
        console.log("Client request getOneInquiry");
        console.log("Client header: ", req.rawHeaders);

        const inquiry = await Inquiry.findByPk(req.params.inquiryID)
        .catch(function(err) {
            console.log("getOneInquiry error: ", err);
            res.json({error: err.message, type: "getOneInquiry"});
            return;
        });
        if (inquiry === null) {
            console.log("getOneInquiry null: ", inquiry);
            res.json({error: "Could not find or does not exist", type: "getOneInquiry"});
        }else {
            console.log("getOneInquiry success");
            res.json({success: "Successfully obtained inquiry", type: "getOneInquiry", inquiry: inquiry});
        }


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


