var express = require('express');
const registerUserController = require('../controllers/registerUserController');
var router = express.Router();

const multer = require('multer');
const{ storage } = require('../src/config/users');

//inicialização do multer as configurações de storage
const upload = multer({storage})


// rota de cadastros de clientes
router.get('/create', registerUserController.create);
router.post('/user-register',upload.single('picture'), registerUserController.register);



module.exports = router;