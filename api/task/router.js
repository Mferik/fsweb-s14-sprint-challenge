// `/api/tasks` router buraya

const router = require("express").Router();

const taskModel = require("./model");

router.get("/", async (req, res, next) => {
  try {
    let allTasks = await taskModel.getAllTasks();
    res.json(allTasks);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let inserted = await taskModel.createTask(req.body);
    res.json(inserted);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
