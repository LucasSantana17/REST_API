const mysql = require('mysql');
require('dotenv').config();

const conexao = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
})

conexao.connect((err) => {
    if(err) {
        console.error(`Erro ao conectar com o banco de dados ${process.env.DB_DATABASE}`);
        throw err; 
    }
    console.log('Conexão bem sucedida...');
})

module.exports = conexao;
