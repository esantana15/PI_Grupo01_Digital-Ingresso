const Evento = require('../models/Evento');

const eventoController = {
    index: (req, res) => {
    //    res.send('rota do painel')
        const eventos = Evento.findAll();
        res.render('evento/painel', { eventos })
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

    editForm: (req,res) => {
        const { id } = req.params
        const evento = Evento.findById(id)
        res.render('evento/form__evento', { evento })
    },



}


module.exports = eventoController