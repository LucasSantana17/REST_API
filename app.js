const express = require('express');
const app = express();
const cors = require('cors');
const routesCadastro = require('./routes/cadastro')
const rota_banco = require('./routes/cadastro_db');


app.use(cors());
app.use('/',routesCadastro);
app.use('/', rota_banco);
app.use('/cadastro', routesCadastro);
app.use("/user",(request, response, next) =>{
        response.status(200).send({
            nome: 'Lucas',
            idade: 24
        })
});

module.exports = app;