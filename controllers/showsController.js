const Evento = require('../models/Evento');

const showsController = {
    index: (req, res) => {
        const eventos = Evento.findAll();
           


        return res.render('shows', {eventos})
    }
}

module.exports = showsController;