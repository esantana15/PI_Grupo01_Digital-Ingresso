const { where } = require('sequelize');
const db = require('../models');
const Event = require('../models/Events')

const concertoController = {
    create: (req, res) => {
        return res.render('criarShow')
    },

    register:  (req, res) => {
        console.log(req.body),
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
        
        .then((req, res, next) => {
            const file = req.file
            if (!file) {
                return res.send('Envio de foto obrigatório');
            }
            return res.send('Evento cadastrado com sucesso!');
        
        })
        .catch((error) => console.log(error))  
        return res.send('Arquivo enviado com sucesso');
    },
  

    getConcerts: function(req, res){
        db.Events.findAll()
        .then(function(eventsReturned) {
            return res.render('lista', {Event: eventsReturned})
        })
        .catch((error) = res.render('not-found'))
    },
    updateConcert:(req, res) =>{
        let concertId = req.params.eventoId;
        let showsReturned;
        let eventAddressesReturned;


        db.EventAddress.findAll()
        .then((enderecos) => {
            eventAddressesReturned = enderecos;
            return eventAddressesReturned;
        })
        .then((eventAddressesReturned) => {
        showsReturned = db.Events.findAll(concertId)
        .then((showsReturned) =>{
            res.render('editarShow', {eventos: showsReturned})
        })
    })

    },

    processUpdate: (req, res) =>{
        db.Events.update(
            {
                evento: req.body.event,
                fotoEvento: req.body.picture
            },{
                where: {
                id: req.params.id
                }
            }),
        db.EventAddress.update(
                {
                    cidadeEvento: req.body.city,
                    bairroEvento: req.body.neighborhood,
                    ruaEvento: req.body.address,
                    localEvento: req.body.location,
                    horaEvento: req.body.hour,
                    dataEvento: req.body.date,

                },{
                    where: {
                    id: req.params.id
                    }
                })
                .then(() => res.redirect('/shows/' + req.params.id))
                .catch((error) => console.log.apply(error))
            },

    // editConcert:(req, res) =>{
    //     res.send("Você editou o produto " + event )
    // }
}





module.exports = concertoController;

