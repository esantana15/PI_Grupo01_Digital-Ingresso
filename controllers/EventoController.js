const Evento = require('../models/Evento');

const eventoController = {
    index: (req, res) => {
    //    res.send('rota do painel')
        res.render('evento/painel')
    },

    novo: (req,res) => {
        res.render('evento/form__evento')
    }

}


module.exports = eventoController