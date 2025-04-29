var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusItens = [
      { id: 1, nome: 'Item Alfa', descricao: 'Descrição detalhada do Item Alfa.' },
      { id: 2, nome: 'Item Beta', descricao: 'O segundo item da nossa lista dinâmica.' },
      { id: 3, nome: 'Item Gama', descricao: 'Terceiro e último item exemplo.' },
      { id: 4, nome: 'Item Delta', descricao: 'Mais um item para testar.' },
      { id: 5, nome: 'Item Épsilon', descricao: 'Quinto item.' },
      { id: 6, nome: 'Item Zeta', descricao: 'Sexto item da lista dinâmica.' },
      { id: 7, nome: 'Item Eta', descricao: 'Mais um exemplo' },
      { id: 8, nome: 'Item Teta', descricao: 'Descrição do Item Teta.' },
      { id: 9, nome: 'Item Iota', descricao: 'Iota.' },
      { id: 10, nome: 'Item Kappa', descricao: 'Kappa é o décimo item' },
      { id: 11, nome: 'Item Lambda', descricao: 'O Item onze é o Lambda.' },
      { id: 12, nome: 'Item Mu', descricao: 'Mu é o décimo segundo item da lista.' },
      { id: 13, nome: 'Item Ni', descricao: 'Ni é o décimo terceiro item da lista.' },
      { id: 14, nome: 'Item Xi', descricao: 'O item catorze é o Xi.' },
      { id: 15, nome: 'Item Omicron', descricao: 'Mais um item para testarmos.' },
      { id: 16, nome: 'Item Pi', descricao: 'Pi é o item dezesseis.' },
      { id: 17, nome: 'Item Rho', descricao: 'Rho é o item dezessete.' },
      { id: 18, nome: 'Item Sigma', descricao: 'O item dezoito é o Sigma.' },
      { id: 19, nome: 'Item Tau', descricao: 'Tau é o próximo item.' },
      { id: 20, nome: 'Item Ípsilon', descricao: 'Ípsilon é um item da lista dinâmica.' },
      { id: 21, nome: 'Item Fi', descricao: 'Fi é o item vinte e um.' },
      { id: 22, nome: 'Item Chi', descricao: 'Chi é o item vinte e dois.' },
      { id: 23, nome: 'Item Psi', descricao: 'Psi é o próximo item da lista.' },
      { id: 24, nome: 'Item Ômega', descricao: 'Ômega é o último item da lista dinâmica.' },

    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('lista', {
      titulo: 'Minha Lista Dinâmica',
      itensParaView: meusItens // Passando o array para a view
    });
  });

  module.exports = router;
