var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusProdutos = [
      { id: 1, nome: 'Perfume Lily', descricao: 'Perfume oboticário com fragrância cheirosa', foto: 'public/imagens/perfume.webp'},
      { id: 2, nome: 'Bola de vôlei', descricao: 'Bola de vôlei MIKASA profissional', foto: 'public/imagens/bola.webp'},
      { id: 3, nome: 'Esmalte Rebu', descricao: 'Esmalte vermelho', foto: 'public/imagens/esmalte.webp' },
      { id: 4, nome: 'Anel de prata', descricao: 'Anel prateado', foto: 'public/imagens/anelprata.webp'},
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('listaprodutos', {
      titulo: 'Meus produtos',
      produtosParaView: meusProdutos // Passando o array para a view
    });
  });

  module.exports = router;
