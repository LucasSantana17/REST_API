const conexao_db = require('../banco_de_dados/bancoDados');
const express = require('express');
const cadastro_db = express.Router();

cadastro_db.get('/banco', (request, response) => {
    const sql = 'SELECT * FROM cliente';
    conexao_db.query(sql, (err, result) => {
        if (err) {
            return response.status(500).json({ mensagem: 'Erro ao buscar cliente', err: err });
        }
        response.status(200).json(result);
    });
});

// criando cadastro
cadastro_db.post('/criar', (request, response) => {
    const {nome, idade, cpf, cidade} = request.body;

    const sql = 'INSERT INTO cliente (nome, idade, cpf, cidade) VALUES (?, ?, ?, ?)';
 
   conexao_db.query(sql, [nome, idade, cpf, cidade], (err) => {
       
       if(err){
           console.log('Não foi possível criar um novo cadastro:', err);
           response.status(500).json({ error: 'Ocorreu um erro ao criar o cadastro' });
       } else { 
           console.log('Novo cadastro criado com sucesso!');
           response.status(200).json({ message: 'Cadastro criado com sucesso' });
       }
   });
});

cadastro_db.get('/consulta', (request, response) => {
    const {id}= request.query;
    
    const sql = 'SELECT * FROM cliente WHERE id  = ?';

    conexao_db.query(sql, [id], (err, resultado) => {
        if(err){
                console.log('Ocorreu um erro na cunsulta', err);
        return response.status(500).json({err: 'Erro ao consultar'});
        }else{
                console.log('Consulta bem sucedida');
           return response.json(resultado); 
        }
    });
});

module.exports = cadastro_db;




