const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

//Quando temos unico item na arrowFunction não precisa envover a função com chaves
module.exports = () =>
  open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  });
