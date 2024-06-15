// Test Model

module.exports = (sequelize, Sequelize) => {
    const Test = sequelize.define("Test", {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: Sequelize.STRING,
        },
        duration: {
            type: Sequelize.FLOAT,
        }
    });
    
    return Category;
};