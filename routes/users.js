var express = require('express');
const registerUserController = require('../controllers/registerUserController');
const registerAddressController = require('../controllers/registerAddressUserController');
const accessController = require('../controllers/accessController');
const cadastroController = require('../controllers/cadastroController')
var router = express.Router();

const multer = require('multer');
const{ storage } = require('../src/config/users');

//inicialização do multer as configurações de storage
const upload = multer({storage})


router.get('/', cadastroController.index);

// rota de cadastro de clientes
router.get('/create', registerUserController.create);
router.post('/user-register',upload.single('picture'), registerUserController.register);

// rota de cadastro de endereço de clientes
router.get('/create-address', registerAddressController.createAddress);
router.post('/address-register', registerAddressController.registerAddress);

// rota de cadastro de credenciais de clientes
router.get('/create-access', accessController.createAccess);
router.post('/access-register', accessController.registerAccess);


module.exports = router;