// `Resource` modeli buraya
const db = require("../../data/dbConfig");

const getAllResources = async () => {
  const allResources = await db("resources");
  return allResources;
};

const createResource = async (model) => {
  const insertedResourceId = await db("resources").insert(model);

  const insertedRecord = await db("resources").where(
    "resource_id",
    insertedResourceId[0]
  );
  return insertedRecord[0];
};

module.exports = {
  getAllResources,
  createResource,
};
