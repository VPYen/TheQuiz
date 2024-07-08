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
        
        const category = await Category.findByPk(req.params.categoryID, {include: ["tests"]});
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
        
        const categories = await Category.findAll({include: {model: Test, as: "tests"}});
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
        });
        if (created) {
            console.log("newCategory success");
            res.json({success:"Successfully created new category", type:"newCategory", category: category});
        }else if (category) {
            console.log("newCategory already exists: ", category);
            res.json({success:"Category already exists, returned existing category", type:"newCategory", category: category});
        }else {
            console.log("newCategory null: ", category);
            res.json({error: "Does not exist or unable to create", type: "newCategory"});
        }
    },

    editCategory: async function(req, res) {
        console.log("Client request editCategory");
        console.log("Client header: ", req.rawHeaders);
        console.log("Request Body: ", req.body);

        const category = await Category.findByPk(req.params.categoryID);
        if (category === null) {
            console.log("editCategory null: ", category);
            res.json({error: "Unable to edit or does not exist", type:"editCategory"});
        }else {
            category.set({
                name: req.body.name
            });
            await category.save();
            console.log("editCategory success: ", category);
            res.json({success: "Category updated", type: "editCategory", category: category});
        }
    },

    deleteCategory: async function(req, res) {
        console.log("Client request deleteCategory");
        console.log("Client header: ", req.rawHeaders);

        const instance = await Category.destroy({
            where: {id: req.params.categoryID}
        });
        console.log("deleteCategory instance: ",instance);
        if (instance) {
            console.log("deleteCategory success");
            res.json({success: "Category deleted", type: "deleteCategory"});
        }else {
            console.log("deleteCategory error");
            res.json({error: "Unable to delete or does not exist", type: "deleteCategory"});
        }
    },


// Test Functions
    getOneTest: async function(req, res) {
        console.log("Client request getOneTest");
        console.log("Client header: ", req.rawHeaders);

        const test = await Test.findByPk(req.params.testID, {include: {model: Inquiry, as: "inquiries"}});
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

        const category = await Category.findByPk(req.params.categoryID, {include: ["tests"]});
        if (category === null) {
            console.log("newTest category null: ", category);
            res.json({error: "Unable to find category or does not exist", type: "newTest"});
        }else {
            const [test, created] = await Test.findOrCreate({
                where: {
                    name: req.body.name,
                    description: req.body.description,
                    categoryID: req.params.categoryID
                },
            });
            if (created) {
                await category.addTest(test);
                console.log("newTest success");
                res.json({success: "Successfully created new test", type: "newTest", test: test});
            }else if (test) {
                console.log("newTest already exists: ", test);
                res.json({success: "Test already exists, returned existing test", type: "newTest", test: test});
            }else {
                console.log("newTest null: ", test);
                res.json({error: "Does not exist or unable to create", type: "newTest"});
            }
        }


    },

    editTest: async function(req, res) {
        console.log("Client request editTest");
        console.log("Client header: ", req.rawHeaders);

        const test = await Test.findByPk(req.params.testID);

        if (test === null) {
            console.log("editTest null: ", test);
            res.json({error: "Unable to edit or does not exist", type:"editTest"});
        }else{
            test.set({
                name: req.body.name,
                description: req.body.description
            });
            await test.save();
            console.log("editTest success");
            res.json({success: "Test updated", type: "editTest", test: test});
        }

    },

    deleteTest: async function(req, res) {
        console.log("Client request deleteTest");
        console.log("Client header: ", req.rawHeaders);

        const instance = await Test.destroy({
            where: {id: req.params.testID}
        });
        if (instance) {
            console.log("deleteTest success");
            res.json({success: "Test deleted", type: "deleteTest"});
        }else {
            console.log("deleteTest error");
            res.json({error: "Unable to delete or does not exist", type: "deleteTest"});
        }
    },


// Inquiry Functions
    getOneInquiry: async function(req, res) {
        console.log("Client request getOneInquiry");
        console.log("Client header: ", req.rawHeaders);

        const inquiry = await Inquiry.findByPk(req.params.inquiryID);
        if (inquiry === null) {
            console.log("getOneInquiry null: ", inquiry);
            res.json({error: "Could not find or does not exist", type: "getOneInquiry"});
        }else {
            console.log("getOneInquiry success");
            res.json({success: "Successfully obtained inquiry", type: "getOneInquiry", inquiry: inquiry});
        }
    },

    newInquiry: async function(req, res) {
        console.log("Client request newInquiry");
        console.log("Client header: ", req.rawHeaders);

        const [inquiry, created] = await Inquiry.findOrCreate({
            where: {
                question: req.body.question,
                type: req.body.type,
                answer: req.body.answer,
                option: req.body.options,
                testID: req.params.testID
            }
        });
        if (created) {
            console.log("newInquiry success");
            res.json({success: "Successfully created new inquiry", type: "newInquiry", inquiry: inquiry});
        }else if (inquiry) {
            console.log("newInquiry already exists: ", inquiry);
            res.json({success: "Inquiry already exists, returned existing inquiry", type: "newInquiry", inquiry: inquiry});
        }else {
            console.log("newInquiry null: ", inquiry);
            res.json({error: "Unable to delete or does not exist", type: "newInquiry"});
        }
    },

    editInquiry: async function(req, res) {
        console.log("Client request editInquiry");
        console.log("Client header: ", req.rawHeaders);

        const inquiry = await Inquiry.findByPk(req.params.inquiryID);

        if (inquiry === null) {
            console.log("editTest null: ", inquiry);
            res.json({error: "Unable to edit or does not exist", type:"editInquiry"});
        }else {
            inquiry.set({
                question: req.body.question,
                type: req.body.type,
                answer: req.body.answer,
                options: req.body.options
            });
            await inquiry.save();
            console.log("editInquiry success");
            res.json({success: "Inquiry updated", type: "editInquiry", inquiry: inquiry});
        }
    },

    deleteInquiry: async function(req, res) {
        console.log("Client request deleteInquiry");
        console.log("Client header: ", req.rawHeaders);

        const instance = await Inquiry.destroy({
            where: {id: req.params.inquiryID}
        });
        if (instance) {
            console.log("deleteInquiry success");
            res.json({success: "Inquiry deleted", type: "deleteInquiry"});
        }else {
            console.log("deleteInquiry error");
            res.json({error: "Unable to delete or does not exist", type: "deleteInquiry"});
        }

    }
};


