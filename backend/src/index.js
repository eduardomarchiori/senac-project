(async () => {
  const express = require("express");
  const bodyParser = require("body-parser");
  const cors = require("cors");
  const sequelize = require("./db/db");
  const Course = require("./models/course");

  const {
    createCourse,
    getCourse,
    getCourses,
    updateCourse,
  } = require("./services/course");

  await sequelize.sync({ force: true });

  const app = express();

  app.use(bodyParser.json());
  app.use(cors());

  app.get("/course", getCourses);
  app.get("/course/:id", getCourse);
  app.post("/course", createCourse);
  app.put("/course/:id", updateCourse);

  app.listen(3000);
})();
