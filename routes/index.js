var express = require('express');
const carrinhoController = require('../controllers/carrinhoController');
const cartController = require('../controllers/cartController')
const perfilController = require('../controllers/perfilController');
const loginController = require('../controllers/loginController');
const showsController = require('../controllers/showsController');
const clienteController = require('../controllers/clienteController');
const eventoController = require('../controllers/EventoController');
const homeController = require('../controllers/homeController');
const checkoutController = require('../controllers/checkoutController');
const concertoController= require('../controllers/concertoController');
var router = express.Router();
const multer = require ('multer');

const { storage } = require('../src/config/uploads');
const upload = multer({ storage })


//Rota da Home
router.get('/', homeController.index)


//Rota para o carrinho
router.get("/carrinho", carrinhoController.index)
router.get("/cart", cartController.index)

//Rota de Login
router.get("/login", loginController.index)
router.get("/perfil", perfilController.index)
router.get("/shows", showsController.index)
router.get("/checkout", checkoutController.index)


module.exports = router;

