//const mysql = require ('mysql2/promise'); // importando a biblioteca mysql
const Pool = require('pg').Pool;
require('dotenv').config();

const connection = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DB
});

/*
//criando conexão com o DB MySQL
const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});
*/

module.exports =  connection;

//export default connection;