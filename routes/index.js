var express = require('express');
const carrinhoController = require('../controllers/carrinhoController');
const perfilController = require('../controllers/perfilController');
const loginController = require('../controllers/loginController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/carrinho", carrinhoController.index)
module.exports = router;

router.get("/login", loginController.index)
module.exports = router;

router.get("/perfil", perfilController.index)
module.exports = router;
