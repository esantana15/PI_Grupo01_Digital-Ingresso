var express = require('express');
var router = express.Router();
const concertoController = require('../controllers/concertoController');
const eventoController = require('../controllers/EventoController');
const multer = require('multer');
const{ storage } = require ('../src/config/upload')

//inicialização do multer as configurações de storage

const upload = multer({storage})

//CREATE SHOW
router.get('/create', concertoController.create);
router.post('/register',upload.single('picture'),  concertoController.register);



router.get('list-concerts', concertoController.getConcerts);

// router.get('update', concertoController.updateEvents);
// router.post('process-update', concertoController.processUpdate);

module.exports = router;