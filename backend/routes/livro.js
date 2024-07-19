const { Router } = require("express")
const { getLivros } = require('../controller/livros')

const router = Router();

router.get('/', getLivros);

router.post('/', (req, res) => {
    res.send("Post!")
});

router.patch('/', (req, res) => {
    res.send("patch!")
});

router.delete('/', (req, res) => {
    res.send("delete!")
});



module.exports = router;