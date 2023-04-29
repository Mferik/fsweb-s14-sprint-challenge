//  `/api/projects` router buraya
const router = require("express").Router();

const projectModel = require("./model");

router.get("/", async (req, res, next) => {
  try {
    let allProjects = await projectModel.getAllProjects();
    res.json(allProjects);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let inserted = await projectModel.createProjects(req.body);
    res.json(inserted);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
