const { where } = require('sequelize');
const db = require('../database/models');
 

const accessController = {
    createAccess: (req, res) => {
        return res.render('userRegister3')
    },

    registerAccess:  (req, res) => {
        console.log(req.body),
        db.UserAccess.createAccess({
            email: req.body.event,
            emailConfirm: req.file.filename,
            password: req.body.city,
            passwordConfirm: req.body.neighborhood,    
            
        })

        .catch((error) => console.log(error))  
        return res.send('Arquivo enviado com sucesso');
    },
}

module.exports = accessController;

