

document.getElementById("Envio_cadastro").addEventListener('submit', (evento) => {
    evento.preventDefault();

    var Dados = new Dados(this);

    var jsonDados = {};
    Dados.forEach((valor, chave) => {
        jsonDados[chave] = valor;
    });

    var envioJSON = JSON.stringify(jsonDados);

    fetch('http://localhost:3000/criar', { method:'POST', headers:{'Content-Type':'application/json'}, body: envioJSON})
    .then(( response ) =>  {
        if(!response){
            console.log('Erro ao enviar dados.');
        }
        return response.json();
    }).then(dados => {
        console.log('Dados',dados);
    }).catch(erro => {
        console.log('Error',erro);
    })

});