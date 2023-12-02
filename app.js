function atualizarTextoComBaseNoTamanhoDaTela() {
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