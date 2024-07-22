const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, delatarLivro } = require("../services/livro")


function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
function getLivro(req, res) {
    try {
        const livro = getLivroPorId(req.params.id);
        res.send(livro);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function postLivro(req,res){
    try {
        const livro = req.body;
        insereLivro(livro);
        res.status(201);
        res.send("criado");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function patchLivro(req,res){
    try {
        const id = req.params.id;
        const body = req.body;
        modificaLivro(body, id)
        res.send("modificado");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function deleteLivro(req,res){
    try {
        const id = req.params.id;       
        delatarLivro(id);
        res.send(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}