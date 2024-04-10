const express = require('express');
const routesCadastro = require('./routes/cadastro')
const cors = require('cors');
const app = express();


app.use(cors());
app.use('/',routesCadastro)
app.use('/cadastro', routesCadastro);
app.use("/user",(request, response, next) =>{
        response.status(200).send({
            nome: 'Lucas',
            idade: 24
        },{
            nome: 'Helena',
            idade: 5
        },{
             nome: 'Arthur',
             idade: 1
        })
});

module.exports = app;