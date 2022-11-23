// const Evento = require('../models/Events');

const db = require("../database/models");

// const showsController = {
//         index: (req, res) => {
//             res.render('shows')
//         }
//     }

// module.exports = showsController;

const showsController = {
    index: (req, res) => {
        db.Events.findAll() 
        .then(function(listaConcertos){
            console.log(JSON.stringify(listaConcertos))
            return res.render('shows', {concertos: listaConcertos})
        }),
        db.EventAddress.findAll()
        .then(function(listaEnderecos){
            console.log(JSON.stringify(listaEnderecos))
            return res.render('shows', {endereco: listaEnderecos})
        })
        .catch((error) => res.render('not-found', console.log(error)))
    },

    addCart: (req, res) =>{
        db.Events.findAll() 


    }
}


module.exports = showsController;