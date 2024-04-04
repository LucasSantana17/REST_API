const conexao_db = require('../banco_de_dados/bancoDados');
const express = require('express');
const cadastro_db = express.Router();


cadastro_db.get('/banco', (request, response) =>{
    const sql = 'SELECT * FROM cliente';
    conexao_db.query(sql, (err, result) => {
        if (err) {
            return response.status(500).json({ mensagem: 'Erro ao buscar cliente', err: err });
        }
        response.status(200).json(result);
    })
})

module.exports = cadastro_db;




