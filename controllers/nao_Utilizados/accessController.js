const { where } = require('sequelize');
const db = require('../../database/models');
 

const accessController = {
    createAccess: (req, res) => {
        return res.render('userRegister3')
    },

    registerAccess:  (req, res) => {
        console.log(req.body),
        db.UserAccess.create({
            email: req.body.email,
            emailConfirm: req.body.emailConfirm,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,    
            
        })

        .catch((error) => console.log(error))  
        return res.send('Arquivo enviado com sucesso');
    },
}

module.exports = accessController;

