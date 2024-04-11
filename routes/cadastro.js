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

 module.exports = routes;