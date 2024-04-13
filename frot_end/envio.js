
function lerDadosDoFormulario() {
    var formulario = document.getElementById("meuFormulario");
  
    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault();
  
      var nome = document.getElementById("nome").value;
      var idade = document.getElementById("idade").value;
  
      var dados = {
        nome: nome,
        idade: idade,
      };
  
      var jsonDados = JSON.stringify(dados);

    fetch('http://localhost:3000/cadastrobanco/criar', { method:'POST', headers:{'Content-Type':'application/json'}, body: jsonDados})
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
  
      console.log("Dados do formulário:", jsonDados);
  
      formulario.reset();
    });
  }
  
  lerDadosDoFormulario();