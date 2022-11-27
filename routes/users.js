var express = require('express');
const cadastroController = require('../controllers/cadastroController')
const usuarioController = require('../controllers/usuarioController')
const perfilController = require('../controllers/perfilController')
var router = express.Router();

const multer = require('multer');
const{ storage } = require('../src/config/users');

//inicialização do multer as configurações de storageno
const upload = multer({storage})


router.get('/', cadastroController.index);

// rota de cadastro de clientes
router.get('/create', usuarioController.create);
router.post('/user-register',upload.single('picture'), usuarioController.register);

// rota de cadastro de endereço de clientes
router.get('/create-address', usuarioController.createAddress);
router.post('/address-register', usuarioController.registerAddress);

// rota de cadastro de credenciais de clientes
// router.get('/create-access', usuarioController.createAccess);
// router.post('/access-register', usuarioController.registerAccess);


router.get('/perfil/:email', perfilController.createProfile); //perfil unico



module.exports = router;