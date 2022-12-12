var express = require('express');
const usuarioController = require('../controllers/usuarioController');
const perfilController = require('../controllers/perfilController');
const loginController = require('../controllers/loginController');
const {body} = require('express-validator');
var router = express.Router();
const loggedUserMiddleware = require('../middlewares/loggedUsedMiddleware');
const notLoggedUserMiddleware = require('../middlewares/notLoggedUser')
const multer = require('multer');
const{ storage } = require('../src/config/users');
const validatiions = require("../middlewares/validacoes")

//inicialização do multer as configurações de storageno
const upload = multer({storage})
const validacoes = [
body("nome")
.notEmpty().withMessage("Favor Insira seu nome completo"),
body('cpf')
.notEmpty().withMessage('Favor Insira seu CPF'),
body('data')
.notEmpty().withMessage('Favor Insira sua data de nascimento'),
body('sexo')
.notEmpty().withMessage('Favor Insira sua rua'),
body('rua')
.notEmpty().withMessage('Favor Insira sua senha'),
body('numero')
.notEmpty().withMessage('Favor Insira o número da residencia'),
body('complemento')
.notEmpty().withMessage('Favor Insira seu complemento'),
body('bairro')
.notEmpty().withMessage('Favor Insira seu bairro'),
body('cidade')
.notEmpty().withMessage('Favor Insira sua cidade'),
body('estado')
.notEmpty().withMessage('Favor Insira uma UF'),
body('pais')
.notEmpty().withMessage('Favor Insira o país'),
body('pais')
.notEmpty().withMessage('Favor Insira seu CEP'),

];



// rota de cadastro de clientes
router.get('/register', loggedUserMiddleware, usuarioController.create);
router.post('/user-register', upload.single('picture'), validacoes, usuarioController.register);

// rota de cadastro de endereço de clientes
router.get('/create-address', usuarioController.createAddress);
router.post('/address-register', usuarioController.registerAddress);

// rota de cadastro de credenciais de clientes
// router.get('/create-access', usuarioController.createAccess);
// router.post('/access-register', usuarioController.registerAccess);

//rotas de login
router.get('/login', loggedUserMiddleware, loginController.loginForm);
//Processamento de formulário de login
router.post('/login', validatiions, loginController.loginProcess);
//Rota de Logout
router.get('/logout', notLoggedUserMiddleware, loginController.logout);

// router.get('/perfil/:id', notLoggedUserMiddleware, perfilController.profile); //perfil unico
router.get('/perfil', notLoggedUserMiddleware, loginController.profile); //perfil unico

router.post('/update-user/:id', upload.single('picture'), perfilController.processUpdate);




module.exports = router;