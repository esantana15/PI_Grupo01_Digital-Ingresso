
const db = require("../database/models");
const perfilController = {
    index: (req, res) => {
        db.UserRegister.findAll() 
        .then(function(listaClientes){
            console.log(JSON.stringify(listaClientes))
            return res.render('perfil', {clientes: listaClientes})
        })
        .catch((error) => res.render('not-found', console.log(error)))
    },

    createProfile: function(req, res) {

        let profileId = req.params.id;
        let profillesReturned;
    
        profilesReturned = db.UserRegister.findByPk(profileId)
        .then((profillesReturned) => {
            res.render('perfil', {profilles: profillesReturned})
        })
        .catch((error) => console.log(error))
    }
    
}


module.exports = perfilController;