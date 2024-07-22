const fs = require("fs")

function getTodosLivros() {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    return livros;
}
function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const livro = livros.filter(livro => livro.id === id);
    return livro;
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const novaListaLivros = [...livros, livroNovo];
    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros));
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
    const indicieModificado = livrosAtuais.findIndex(livro => livro.id === id);

    const conteudoMudado = { ...livrosAtuais[indicieModificado], ...modificacoes }

    livrosAtuais[indicieModificado] = conteudoMudado;

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));

}

function delatarLivro(id) {
    let livros = JSON.parse(fs.readFileSync("livros.json"));
    const indicieApagar = livros.findIndex(livro => livro.id === id);    
    if (indicieApagar > -1) {
        livros.splice(indicieApagar, 1);
    }
    // const livrosFiltrados = livros.filter( livro => livro.id!== id ) solucao alura
    fs.writeFileSync("livros.json", JSON.stringify(livros));
}


module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    delatarLivro
}