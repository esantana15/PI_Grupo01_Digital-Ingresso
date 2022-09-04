const Evento = require('../models/Evento');

const eventoController = {
    index: (req, res) => {
    //    res.send('rota do painel')
        res.render('evento/painel')
    },

    novo: (req,res) => {
        res.render('evento/form__evento')
    },

    create: (req, res) => {
        const evento = req.body;
        const avatar = req.file.filename;

        Evento.create(evento, avatar);
        res.redirect('evento/painel')
    },

}


module.exports = eventoController