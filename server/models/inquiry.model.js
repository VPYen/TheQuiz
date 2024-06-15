// Inquiry Model

const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Inquiry = sequelize.define("Inquiry", {
        question: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        type: {
            type: Sequelize.String,
            defaultValue: "standard", // options: standard, multipleanswer, multiplechoice
            allowNull: false
        },
        answer: {
            type: DataTypes.Array(DataTypes.STRING),
            allowNull: false
        }
    });
    
    return Category;
};