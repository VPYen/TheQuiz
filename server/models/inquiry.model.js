// Inquiry Model

module.exports = (sequelize, Sequelize) => {
    const Inquiry = sequelize.define("Inquiry", {
        question: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        type: {
            type: Sequelize.STRING,
            defaultValue: "standard", // options: standard, multiple-answer, multiple-choice
            allowNull: false
        },
        answer: {
            type: Sequelize.STRING,
            allowNull: false
        },
        options: {
            type: Sequelize.ARRAY(Sequelize.STRING)
        }
    });
    
    return Inquiry;
};