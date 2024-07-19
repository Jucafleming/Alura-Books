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


module.exports =  {
    getTodosLivros,
    getLivroPorId
}