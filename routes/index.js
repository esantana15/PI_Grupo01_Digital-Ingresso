var express = require('express');
const carrinhoController = require('../controllers/carrinhoController');
const cartController = require('../controllers/cartController')
const homeController = require('../controllers/homeController');
const checkoutController = require('../controllers/checkoutController');
const cadastroController = require('../controllers/cadastroController')
var router = express.Router();
const multer = require ('multer');

const { storage } = require('../src/config/uploads');
const upload = multer({ storage })


//Rota da Home
router.get('/', homeController.index);
// router.get('/', homeController.shows);

// router.get('/shows', showsController.index);

//Rota para o carrinho
router.get("/carrinho", carrinhoController.index);
router.get("/cart", cartController.index);


//rota para pagamento
router.get("/checkout", checkoutController.index)

//Area de ADM
router.get('/cadastro', cadastroController.index);



module.exports = router;

