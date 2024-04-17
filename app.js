const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rota_banco = require('./routes/cadastro_db');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/cadastrobanco', rota_banco);


module.exports = app;