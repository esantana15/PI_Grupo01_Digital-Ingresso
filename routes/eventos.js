const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/EventoController');

router.get('/evento/painel', eventoController.index)
router.get('/evento/form__evento', eventoController.novo)

module.exports = router
