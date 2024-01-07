// Auto rolagem

// Adiciona um ouvinte de evento de clique a todos os botões com a classe 'botaoScroll'
document.querySelectorAll('.botaoScroll').forEach(function(botao) {
  botao.addEventListener('click', function() {
    // Obtém o ID da seção correspondente ao botão clicado
    const idDaSecao = botao.getAttribute('id').replace('botaoScroll', '');
    
    // Obtém a referência ao elemento da seção correspondente
    const secaoCorrespondente = document.getElementById('secao' + idDaSecao);
    
    // Obtém a posição vertical da seção correspondente
    const posicaoSecao = secaoCorrespondente.offsetTop;

    // Rola a página até a posição da seção correspondente
    window.scrollTo({
      top: posicaoSecao,
      behavior: 'smooth'
    });
  });
});

