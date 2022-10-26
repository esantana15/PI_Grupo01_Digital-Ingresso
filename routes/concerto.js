var express = require('express');
var router = express.Router();
const concertoController = require('../controllers/concertoController')



//CREATE SHOW
router.get('/create', concertoController.create);

router.post('/register', concertoController.register);

module.exports = router;