const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/EventoController');
const multer = require('multer');

const{ storage } = require ('../src/config/upload')

//inicialização do multer as configurações de storage

const upload = multer({storage})




router.get('/painel', eventoController.index)
router.get('/criar', eventoController.novo)
router.post('/', upload.single('avatar'), eventoController.create)

//rota para mostrar o form de edição do usuario
router.get('/edit/:id', eventoController.editForm)

//rota para de fato atualizar o usuario
router.put('/:id', upload.single('avatar'), eventoController.update)


//deletar evento
router.delete('/:id', eventoController.delete)


module.exports = router
