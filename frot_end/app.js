document.addEventListener('DOMContentLoaded', function() {
    
    
    var produto = document.querySelector("#valor");
    fetch('http://localhost:3000/user')
      .then(response => {
        if (!response.ok) {
          throw new Error('Resposta da rede não foi bem-sucedida');
        }
        return response.json();
      })
      .then(result => {
        produto.textContent = JSON.stringify(result);
      })

  });

  