function buscarDados() {
  // Obtém o formulário de busca pelo ID
  let buscar = document.getElementById('buscaBanco');

  // Adiciona um evento de envio (submit) ao formulário
  buscar.addEventListener('submit', (evento) => {
    // Impede o comportamento padrão de envio do formulário
    evento.preventDefault();

    // Obtém o valor do campo de entrada (input) com o ID 'busca'
    let id = document.getElementById("busca").value;

    // Envia uma requisição GET para o servidor, passando o 'id' como parâmetro na URL
    fetch(`http://localhost:3000/cadastrobanco/consulta?id=${id}`, { method: 'GET', headers: { 'Content-Type': 'application/json' } })
      .then((resposta) => {
        // Verifica se a resposta não está OK (código de status 200-299)
        if (!resposta.ok) {
          throw new Error('Falha ao buscar'); // Lança um erro em caso de falha na requisição
        }
        return resposta.json(); // Converte a resposta para JSON
      })
      .then((dados) => {
        console.log('Dados', dados); // Exibe os dados retornados pelo servidor no console

        document.getElementById('resultado').textContent = JSON.stringify(dados)
      })
      .catch((erro) => {
        console.error('Erro ao buscar dados:', erro); // Captura e exibe erros que ocorrerem durante a requisição
      });
  });
}

buscarDados(); // Chama a função buscarDados para iniciar o processo de busca quando o script é carregado
