const { where } = require('sequelize');
const db = require('../database/models');
 

const concertoController = {
    create: (req, res) => {
        return res.render('criarShow')
    },

    register:  (req, res) => {
        console.log(req.body),
        db.Events.create({
            evento: req.body.event,
            fotoEvento: req.file.filename,
            cidadeEvento: req.body.city,
            bairroEvento: req.body.neighborhood,
            ruaEvento: req.body.address,
            localEvento: req.body.location,
            horaEvento: req.body.hour,
            dataEvento: req.body.date,
        
            
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
  
//Lista de Shows
    getConcerts: function(req, res) {
        db.Events.findAll()
        .then(function(listaConcertos) {
            return res.render('lista', {lista: listaConcertos})
        })
        .catch((error) => res.render('not-found'))
    },



    updateConcert:(req, res) =>{
        let concertId = req.params.id;
        let = concertsReturned;

        concertReturned = db.Events.findByPk(concertId)
        .then((concertsReturned) => {
            console.log(JSON.stringify(concertsReturned))
            res.render('editarShow', {concerto: concertsReturned})
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

            deleteConcert: function(req, res) {
                db.Events.destroy(
            {
                where: {
                   id: req.params.idEvento
                }
            }
        )
            .then(() => res.redirect('/list-concerts'))
            .catch((error) => console.log.apply(error))
    }

    // editConcert:(req, res) =>{
    //     res.send("Você editou o produto " + event )
    // }

    
}

module.exports = concertoController;

