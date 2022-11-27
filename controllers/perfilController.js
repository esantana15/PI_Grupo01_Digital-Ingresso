
const Sequelize = require('sequelize');

const { User, Address } = require("../database/models");

const perfilController = {
    createProfile: async function (req, res) {

        const usersReturned = await User.findOne({
            where: {
                email: req.params.email
            }
            
        })
            console.log(usersReturned)
                res.render('perfil', { users: usersReturned })
    }



}


module.exports = perfilController;