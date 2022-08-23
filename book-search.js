const books = require('./db')
const readline = require('readline-sync')

const firstQuestion = readline.question('Deseja buscar um livro? S/N ')

if (firstQuestion.toLocaleUpperCase() === 'S') {
  console.log('Essas são as categorias de livros disponiveis:')
  console.log('Produtividade', '/ História brasileira','/ Américas','/ Estilo de vida','/ Tecnologia')

  const secondQuestion = readline.question('Digite a categoria desejada:')

  const filteredBooks = books.filter(book => book.category === secondQuestion)
    if (filteredBooks.length > 0) {
        console.table(filteredBooks)
    } else {
        console.log("A categoria digitada não existe")
    }

} else {
  const orderedBooks = books.sort((a,b)=> a.pages - b.pages)
  console.log('Essas são todos os livros disponíveis:')
  console.table(orderedBooks)
}