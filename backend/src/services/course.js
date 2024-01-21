const Course = require("../models/course");

const getCourses = async (req, res, next) => {
  try {
    const courses = await Course.findAll();

    res.status(200).json(courses);
  } catch (error) {
    res.status(500);
  }
};

const getCourse = async (req, res, next) => {
  const { id } = req.params;

  try {
    const [course] = await Course.findAll({
      where: {
        id,
      },
    });

    res.status(200).json(course);
  } catch (error) {
    res.status(500);
  }
};

const createCourse = async (req, res, next) => {
  const { name, description, coordinador, bannerLink } = req.body;

  try {
    const course = await Course.create({
      name,
      description,
      coordinador,
      bannerLink,
    });

    console.log(`Course with id ${course.id} was created`);

    res.status(200);
  } catch (error) {
    res.status(500);
  }
};

const updateCourse = async (req, res, next) => {
  const { id } = req.params;
  const { name, description, coordinador, bannerLink } = req.body;

  try {
    const courses = await Course.update(
      { name, description, coordinador, bannerLink },
      {
        where: {
          id,
        },
      }
    );

    res.status(200).json(courses);
  } catch (error) {
    res.status(500);
  }
};

module.exports = {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
};
