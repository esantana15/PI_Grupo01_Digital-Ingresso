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

//rota para editar um evento.
router.get('/edit/:id', eventoController.editForm)



module.exports = router
