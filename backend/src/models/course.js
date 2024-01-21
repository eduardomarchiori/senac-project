const Sequelize = require("sequelize");
const database = require("../db/db");

const Course = database.define("coruse", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  coordinador: {
    type: Sequelize.STRING,
  },
  bannerLink: {
    type: Sequelize.STRING,
  },
});

module.exports = Course;
