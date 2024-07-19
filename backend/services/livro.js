const fs = require("fs")

function getTodosLivros(){
    const livros = JSON.parse( fs.readFileSync("livros.json"));
    return livros;
}
function getLivroPorId(id){
    const livros = JSON.parse( fs.readFileSync("livros.json"));
    const livro = livros.filter( livro => livro.id === id );
    return livro;
}

function insereLivro(livroNovo){
    const livros = JSON.parse( fs.readFileSync("livros.json"));
    const novaListaLivros = [...livros, livroNovo];
    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros));
}


module.exports =  {
    getTodosLivros,
    getLivroPorId,
    insereLivro
}