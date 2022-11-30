var express = require('express');
const usuarioController = require('../controllers/usuarioController');
const perfilController = require('../controllers/perfilController');
const loginController = require('../controllers/loginController');
const {body} = require('express-validator');
var router = express.Router();
// const loggedUserMiddleware = require('../middlewares/logUsedMiddleware');
// const notLoggedUserMiddleware = require('../middlewares/notLoggedUser')
const multer = require('multer');
const{ storage } = require('../src/config/users');

//inicialização do multer as configurações de storageno
const upload = multer({storage})
// const validacoes = [
//     body('email').isEmail().notEmpty().withMessage("Favor preencher com o seu e-mail"),
//     body('emailConfirm').isEmail().notEmpty().withMessage("Favor preencher com o seu e-mail")

// ]



// rota de cadastro de clientes
router.get('/register', usuarioController.create);
router.post('/user-register',upload.single('picture'), usuarioController.register);

// rota de cadastro de endereço de clientes
router.get('/create-address', usuarioController.createAddress);
router.post('/address-register', usuarioController.registerAddress);

// rota de cadastro de credenciais de clientes
// router.get('/create-access', usuarioController.createAccess);
// router.post('/access-register', usuarioController.registerAccess);

//rotas de login
router.get('/login', loginController.loginForm);
//Processamento de formulário de login
router.post('/login', loginController.loginProcess);
//Rota de Logout
router.get('/logout', loginController.logout);

router.get('/perfil/:id', perfilController.profile); //perfil unico
router.get('/perfil', loginController.profile); //perfil unico

router.post('/update-user/:id', upload.single('picture'), perfilController.processUpdate);




module.exports = router;