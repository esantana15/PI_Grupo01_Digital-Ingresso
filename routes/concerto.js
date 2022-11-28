var express = require('express');
var router = express.Router();
const concertoController = require('../controllers/concertoController');
const logEventCreate = require('../middlewares/logEventCreate')
const multer = require('multer');
const{ storage } = require ('../src/config/photoConcert')
const upload = multer({storage})//inicialização do multer as configurações de storage



router.get("/", concertoController.shows)
//CREATE SHOW
router.get('/create', concertoController.create);
router.post('/register',upload.single('picture'), logEventCreate, concertoController.register);

// UPDATE
router.get('/update-concert/:id', concertoController.updateEvents);
router.get('/update-concert', concertoController.getConcerts);

//
router.post('/process-update/:id', upload.single('picture'), concertoController.processUpdate); //delete




router.post('/delete/:id', concertoController.deleteConcert);


// router.get('update', concertoController.updateEvents);
// router.post('process-update', concertoController.processUpdate);

router.get('/concerto', concertoController.create)
router.post('/concerto', concertoController.register)


module.exports = router;