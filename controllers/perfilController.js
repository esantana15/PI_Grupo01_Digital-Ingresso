
const Sequelize = require('sequelize');

const {UserRegister, UserAddress} = require("../database/models");

const perfilController = {
        index: (req, res) => {
            let usuarios = UserRegister.findAll();
            res.render('perfil', {usuarios: usuarios})
        }
    ,

     createProfile: function(req, res) {

        let profileId = req.params.id;
        let usersReturned;
    
        usersReturned = UserRegister.findByPk(profileId)
        console.log(usersReturned)
        .then((usersReturned) => {
            res.render('perfil', {users: usersReturned})
        })
        .catch((error) => console.log(error))
    }
    
}


module.exports = perfilController;