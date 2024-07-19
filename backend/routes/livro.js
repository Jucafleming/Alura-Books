const { Router } = require("express")
const { getLivros, getLivro, postLivro } = require('../controller/livros')

const router = Router();

router.get('/', getLivros);

router.get('/:id', getLivro);

router.post('/', postLivro);

router.patch('/', (req, res) => {
    res.send("patch!")
});

router.delete('/', (req, res) => {
    res.send("delete!")
});



module.exports = router;