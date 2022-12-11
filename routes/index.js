var express = require('express');
const carrinhoController = require('../controllers/carrinhoController');
const homeController = require('../controllers/homeController');
const cadastroController = require('../controllers/cadastroController');
const loggedUserDataMiddleware = require('../middlewares/loggedUserDataMiddleware');

var router = express.Router();
const multer = require ('multer');

const { storage } = require('../src/config/uploads');
const upload = multer({ storage })


//Rota da Home
router.get('/', loggedUserDataMiddleware, homeController.index);
// router.get('/', homeController.shows);

// router.get('/shows', showsController.index);

//Rota para o carrinho
router.get("/carrinho", loggedUserDataMiddleware, carrinhoController.index);


//Area de ADM
router.get('/cadastro', cadastroController.index);



module.exports = router;

