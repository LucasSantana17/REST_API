function buscarDados() {
  
  let buscar = document.getElementById('buscaBanco');

  buscar.addEventListener('submit', (evento) => {
    
    evento.preventDefault();

    let id = document.getElementById("busca").value;

    fetch(`http://localhost:3000/cadastrobanco/consulta?id=${id}`, { method: 'GET', headers: { 'Content-Type': 'application/json' } })
      .then((resposta) => {
      
        if (!resposta.ok) {
          throw new Error('Falha ao buscar'); 
        }
        return resposta.json(); 
      })
      .then((dados) => {
        console.log('Dados', dados); 

        document.getElementById('resultado').textContent = JSON.stringify(dados)
      })
      .catch((erro) => {
        console.error('Erro ao buscar dados:', erro); 
      });
  });
}

buscarDados(); 
