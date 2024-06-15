// Category Model

module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("Category", {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }
    });
  
    return Category;
  };