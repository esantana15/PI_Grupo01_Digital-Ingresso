
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt')


const { User, Address } = require("../database/models");

const perfilController = {
    profile: async function(req, res) {

        const usersReturned = await User.findOne({
            where: {
                id: req.params.id
            }
            
        })


        
            console.log(usersReturned)
                res.render('perfil', { users: usersReturned })
    },

    processUpdate: async function(req, res) {
        try {
            console.log('aqui')
            console.log(req.body)
            let password = req.body.password
            let senhaC = bcrypt.hashSync(password, 10)
    
            console.log('aqui')
            console.log(req.body)
                await User.update(
                {
                    email: req.body.email,
                    emailConfirm: req.body.emailConfirm,
                    password: senhaC,
                    passwordConfirm: req.body.passwordConfirm,
                    // fotoPerfil: req.file.filename,
                    
            },{
                    where: {
                    id: req.params.id
                    }
                }
            )
            res.redirect('/users/perfil')
            
        }   catch (error) {
                console.log("-------------------------------");
                     console.log(">>>> ERRO: ", JSON.stringify(error))
            
        }
    }



}


module.exports = perfilController;