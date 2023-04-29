// bu`Task` modeli buraya
const db = require("../../data/dbConfig");

const getAllTasks = async () => {
  let allTasks = await db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    .select("t.*", "p.project_name", "p.project_description");

  let transformedTasks = allTasks.map((item) => {
    delete item.project_id;
    return {
      ...item,
      task_completed: item.task_completed === 1,
    };
  });
  return transformedTasks;
};

createTask = async (model) => {
  const insertedTaskId = await db("tasks").insert(model);
  const insertedRecord = await db("tasks")
    .where("task_id", insertedTaskId)
    .first();
  insertedRecord["task_completed"] = insertedRecord.task_completed === 1;
  return insertedRecord;
};

module.exports = {
  getAllTasks,
  createTask,
};
