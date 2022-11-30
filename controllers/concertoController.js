const { where } = require('sequelize');
const db = require('../database/models');
 

const concertoController = {

    shows: (req, res) => {
        db.Events.findAll() 
        .then(function(listaConcertos){
            console.log(JSON.stringify(listaConcertos))
            return res.render('shows', {concertos: listaConcertos})
        })
    },

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
            precoEvento: req.body.price,
        
            
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
        return res.send('tudo ok')
        .catch((error) => console.log(error))  

    },
  
//Lista de Shows
    getConcerts: function(req, res) {
        db.Events.findAll()
        .then(function(listaConcertos) {
            return res.render('lista', {lista: listaConcertos})
        })
        .catch((error) => res.render('not-found'))
    },



updateEvents: function(req, res) {
    console.log('aqui')

    let concertId = req.params.id;
    let concertsReturned;

    concertsReturned = db.Events.findByPk(concertId)
    .then((concertsReturned) => {
        res.render('editarShow', {concert: concertsReturned})
    })
    .catch((error) => console.log(error))
}, 
    

    processUpdate: function(req, res) {
        console.log('aqui')
        console.log(req.body)
        try {
        db.Events.update({
            evento: req.body.event,
            fotoEvento: req?.file?.filename,
            cidadeEvento: req.body.city,
            bairroEvento: req.body.neighborhood,
            ruaEvento: req.body.address,
            localEvento: req.body.location,
            horaEvento: req.body.hour,
            dataEvento: req.body.date,
            precoEvento: req.body.price
        }
        
        ,{
                where: {
                idEvento: req.params.id
                }
            }
        )
        res.redirect('/concerto/update-concert/' + req.params.id)
            
        } catch (error) {
            console.log("-------------------------------");
                     console.log(">>>> ERRO: ", JSON.stringify(error))
        }
            
    },

            deleteConcert: function(req, res) {
                db.Events.destroy(
            {
                where: {
                    idEvento: req.params.id

                }
            }
        )
            .then(() => res.redirect('/concerto/update-concert/'))
            .catch((error) => console.log(error))
    }

    // editConcert:(req, res) =>{
    //     res.send("Você editou o produto " + event )
    // }

    
}

module.exports = concertoController;

