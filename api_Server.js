const http = require('http');
const PORT = 3000;
const app = require('./app');

const server = http.createServer(app);

 ServerRodando =_=>{console.log('Servidor Rodando...')};

 server.listen(PORT, ServerRodando);