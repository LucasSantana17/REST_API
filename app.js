const express = require('express');
<<<<<<< HEAD
const routesCadastro = require('./routes/cadastro')
const cors = require('cors');
const app = express();


app.use(cors());
app.use('/',routesCadastro)
=======
const app = express();
const routesCadastro = require('./routes/cadastro');
const rota_banco = require('./routes/cadastro_db');


app.use('/user', rota_banco);

>>>>>>> ed02d2aac00e06a60c54944d1e25149cce54cc32
app.use('/cadastro', routesCadastro);
app.use("/user",(request, response, next) =>{
        response.status(200).send({
            nome: 'Lucas',
            idade: 24
        })
});

module.exports = app;