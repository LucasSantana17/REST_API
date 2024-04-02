const express = require('express');
const app = express();
const routesCadastro = require('./routes/cadastro')


app.use('/cadastro', routesCadastro);

app.use("/user",(request, response, next) =>{
        response.status(200).send({
            nome: 'Lucas',
            idade: 24
        })
});

module.exports = app;