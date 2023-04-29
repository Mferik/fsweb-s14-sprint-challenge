/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("tasks").del();
  await knex("project_resources").del();
  await knex("projects").del();
  await knex("resources").del();

  const projects = [
    {
      project_name:"E-Ticaret Sitesi",
      project_description:"Online satış yapabilen bir e-ticaret sitesi oluşturma"
    },
    {
      project_name:"Blog Sitesi",
      project_description:"Kullanıcıların blog yazabileceği bir web sitesi oluşturma"
    }
  ];
  const resources = [
    {
      resource_name:"Bootstrap",
      resource_description:"Web tasarımı için kullanılan bir CSS kütüphanesi"
    },
    {
      resource_name:"React",
      resource_description:"JavaScript kütüphanesi ile birlikte kullanılan bir UI kütüphanesi"
    },
    {
      resource_name:"Node.js",
      resource_description:"JavaScript çalıştırmak için kullanılan bir ortam"
    },
    {
      resource_name:"MongoDB",
      resource_description:"Doküman tabanlı bir NoSQL veritabanı"
    }
  ];
  const tasks = [
    {
      task_description:"Ana sayfa tasarla",
      task_notes:"Örnek ürünlerin listeleneceği bir ana sayfa tasarla",
      project_id:1
    },
    {
      task_description:"Ürün ekleme sayfası",
      task_notes:"Form oluştur ve ürün bilgilerini al, MongoDB'ye kaydet",
      project_id:1
    },
    {
      task_description:"Blog gönderi tasarla",
      task_notes:"Blog gönderisi için bir tasarım oluştur",
      project_id:2
    },
    {
      task_description:"Gönderi düzenleme özelliği ekle",
      task_notes:"Var olan bir blog gönderisini düzenlemeyi sağlayan bir özellik ekle",
      project_id:2
    }
  ];
  const project_resources=[
    {project_id:1,resource_id:1},
    {project_id:1,resource_id:2},
    {project_id:1,resource_id:3},
    {project_id:1,resource_id:4},
    {project_id:2,resource_id:1},
    {project_id:2,resource_id:2},
    {project_id:2,resource_id:3}
  ];

  await knex("projects").insert(projects);
  await knex("resources").insert(resources);
  await knex("tasks").insert(tasks);
  await knex("project_resources").insert(project_resources);
};
