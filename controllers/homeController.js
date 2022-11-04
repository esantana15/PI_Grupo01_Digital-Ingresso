const Evento = require('../models/Events');

const homeController = {
    index: (req, res) => {
        const eventos = Evento.findAll();
        return res.render('index', {eventos});
    },
}

module.exports = homeController;