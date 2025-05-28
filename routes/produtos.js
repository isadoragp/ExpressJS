const express = require('express');
const router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
  const meusProdutos = [
    { id: 1, nome: 'Perfume Lily', descricao: 'Perfume oboticário com fragrância cheirosa', foto: 'public/imagens/perfume.webp' },
    { id: 2, nome: 'Bola de vôlei', descricao: 'Bola de vôlei MIKASA profissional', foto: 'public/imagens/bola.webp' },
    { id: 3, nome: 'Esmalte Rebu', descricao: 'Esmalte vermelho', foto: 'public/imagens/esmalte.webp' },
    { id: 4, nome: 'Anel de prata', descricao: 'Anel prateado', foto: 'public/imagens/anelprata.webp' },
  ];

  // Renderiza a view Handlebars (ex: views/listaprodutos.hbs)
  res.render('listaprodutos', {
    titulo: 'Meus produtos',
    produtosParaView: meusProdutos
  });
});

module.exports = router;
