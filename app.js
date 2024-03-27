/* function atualizarTextoComBaseNoTamanhoDaTela() {
    var elementoTexto = document.getElementById("texto-dinamico");
  
    if (window.innerWidth <= 600) {
      // Se a largura da tela for menor ou igual a 600 pixels (pode ajustar esse valor conforme necessário)
      elementoTexto.textContent = "trabalhos";
    } else {
      // Se a largura da tela for maior que 600 pixels
      elementoTexto.textContent = "Veja meus trabalhos";
    }
  }
  
  // Chama a função quando a página é carregada e redimensionada
  window.addEventListener("load", atualizarTextoComBaseNoTamanhoDaTela);
  window.addEventListener("resize", atualizarTextoComBaseNoTamanhoDaTela);
*/

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

