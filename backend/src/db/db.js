const Sequelize = require("sequelize");

const sequelize = new Sequelize("course_api", "senac_user", "senac", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
