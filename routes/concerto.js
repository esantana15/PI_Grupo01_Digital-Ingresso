var express = require('express');
var router = express.Router();
const concertoController = require('../controllers/concertoController');
const multer = require('multer');
const{ storage } = require ('../src/config/photoConcert')

//inicialização do multer as configurações de storage

const upload = multer({storage})

//CREATE SHOW
router.get('/create', concertoController.create);
router.post('/register',upload.single('picture'), //(req, res, next) => {
   // const file = req.file
    //if (!file) {
      //  return res.send('Sobe a porra da foto!');
   // }
  //  return res.send('Deu certo essa caraia');

//}, 
concertoController.register);

// UPDATE
router.get('/update-concert/:id', concertoController.updateConcert);
router.post('/process-update/:id', concertoController.processUpdate);


router.get('/list-concerts', concertoController.getConcerts);

// router.get('update', concertoController.updateEvents);
// router.post('process-update', concertoController.processUpdate);

router.get('/concerto', concertoController.create)
router.post('/concerto', concertoController.register)


module.exports = router;