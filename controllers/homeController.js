const { where } = require('sequelize');
const db = require('../database/models');


const homeController = {
    index: (req, res) => {
        db.Events.findAll() 
        .then(function(listaConcertos){
            console.log('aqui')
            console.log(JSON.stringify(listaConcertos))
            return res.render('index', {concertos: listaConcertos})
        })
    }

}


module.exports = homeController;