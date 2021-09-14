const Database = require("./config");

//Estrutura para iniciar o banco de dados com os primeiro comando SQL
const initDb = {
  async init() {
    const db = await Database(); //O comando await diz para o javaScript esperar a execução de Database()

    //Não coloco o restante dentro de uma constante pois não preciso do resultado pra executar o proximo
    //diferente do  Database()
    await db.exec(`CREATE TABLE profile (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT, 
            avatar TEXT, 
            monthly_budget INT,
            days_per_week INT,
            hours_per_day INT,
            vacation_per_year INT,
            value_hour INT
        )`);

    await db.exec(`CREATE TABLE jobs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            daily_hours INT,
            total_hours INT,
            created_at DATETIME
        )`);

    await db.run(`INSERT INTO profile (
            name, 
            avatar, 
            monthly_budget, 
            days_per_week, 
            hours_per_day, 
            vacation_per_year,
            value_hour
            ) VALUES (
            "Lucas Marcelo",
            "https://avatars.githubusercontent.com/u/65972119?v=4",
            3000,
            5,
            5,
            4,
            70
        );`);

    await db.run(`INSERT INTO jobs (
            name,
            daily_hours,
            total_hours,
            created_at
            ) VALUES (
            "Pizzaria Guloso",
            2,
            1,
            1617514376018
        );`);

    await db.run(`INSERT INTO jobs (
            name,
            daily_hours,
            total_hours,
            created_at
            ) VALUES (
            "OneTwo Projects",
            13,
            47,
            1617514376018
        );`);

    await db.close();
  },
};

initDb.init();
