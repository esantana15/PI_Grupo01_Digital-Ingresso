const db = require('../models');

const concertoController = {
    create: (req, res) => {
        return res.render('criarShow');
    },

    register: function (req, res) {
        console.log(req.body)
        db.Events.create({
            evento: req.body.event,
            fotoEvento: req.body.picture
        }),
        db.EventAddress.create({
            cidadeEvento: req.body.city,
            bairroEvento: req.body.neighborhood,
            ruaEvento: req.body.address,
            localEvento: req.body.location,
            horaEvento: req.body.hour,
            dataEvento: req.body.date,
        })
        .then(() => res.redirect('/'))
        .catch((error) => console.log(error))
    },

    getConcerts: function(req, res){
        db.Events.findAll()
        .then(function(eventsReturned) {
            return res.render('listConcerts', {concerts: eventsReturned})
        })
        .catch((error) = console.log(error))
    }
}




module.exports = concertoController;