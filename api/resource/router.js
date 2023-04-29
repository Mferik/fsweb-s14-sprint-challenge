// `/api/resources` router buraya
const router = require("express").Router();

const resourceModel = require("./model");

router.get("/", async (req, res, next) => {
  try {
    let allResources = await resourceModel.getAllResources();
    res.json(allResources);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let inserted = await resourceModel.createResource(req.body);
    res.json(inserted);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
