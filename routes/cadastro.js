 const express = require('express');
 const routes = express.Router();


 routes.get("/",(request, response, next) => {
        response.status(200).send({
            id: 1,
            nome:'Aurora',
            idade: 19,
            sexo: 'Feminino'
        });
 });

 routes.get("/joaoLucas",(request, response) =>{
        response.status(200).send({
            id: 24,
            nome: 'joão Lucas',
            idade: 24
        })
 })

 module.exports = routes;