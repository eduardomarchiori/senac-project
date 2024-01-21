const Sequelize = require("sequelize");

// const connection = async () => {
//   const sequelize = new Sequelize("postgres://postgres@localhost:5432/crud", {
//     host: "localhost",
//     dialect: "postgres",
//   });

//   let course = null;

//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");

//     course = Course(sequelize);
//     await sequelize.sync();
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

const sequelize = new Sequelize("course_api", "senac_user", "senac", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
