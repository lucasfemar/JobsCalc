const Databse = require("../db/config");

module.exports = {
  async get() {
    const db = await Databse();

    const jobs = await db.all(`SELECT * FROM jobs`); // a função all traz todas as linhas da tabela selecionada

    await db.close();

    //  arrow funcion permite retornar um objeto, então  a estrutura não precisa de um return.
    //  PADRÃO: jobs.map(job => () {return x} )
    //  RETORNO DE OBJ: jobs.map(job => ({obj}) )
    return jobs.map((job) => ({
      id: job.id,
      name: job.name,
      "daily-hours": job.daily_hours,
      "total-hours": job.total_hours,
      created_at: job.created_at,
    }));
  },
  async update(updatedJob, jobId) {
    const db = await Databse();

    await db.run(`UPDATE jobs SET 
    name = "${updatedJob.name}", 
    daily_hours = ${updatedJob["daily-hours"]},
    total_hours = ${updatedJob["total-hours"]}
    WHERE id = ${jobId}`);

    await db.close();
  },
  async delete(id) {
    const db = await Databse();

    await db.run(`DELETE FROM jobs WHERE id = ${id}`);

    await db.close();
  },
  async create(newJob) {
    const db = await Databse();

    await db.run(`INSERT INTO jobs (
      name, 
      daily_hours, 
      total_hours, 
      created_at
      ) VALUES (
        "${newJob.name}", 
        ${newJob["daily-hours"]}, 
        ${newJob["total-hours"]}, 
        ${newJob.created_at}
        )`); // a função all traz todas as linhas da tabela selecionada

    await db.close();
  },
};
