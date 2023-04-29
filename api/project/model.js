// `Proje` modeli buraya
const db = require("../../data/dbConfig");

const getAllProjects = async () => {
  let allProjects = await db("projects");

  let transformedProjects = allProjects.map((row) => {
    return {
      ...row,
      project_completed: row.project_completed == 1,
    };
  });
  return transformedProjects;
};

const getById = async (project_id) => {
  let projects = await db("projects").where("project_id", project_id);
  let project = projects[0];
  project["project_completed"] = project.project_completed === 1;
  return project;
};

const createProjects = async (project) => {
  let [project_id] = await db("projects").insert(project);
  return getById(project_id);
};

module.exports = {
  getAllProjects,
  createProjects,
  getById,
};
