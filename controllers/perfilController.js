const Cliente = require ('../models/Client')
const perfilController = {
    index: (req, res) => {
        return res.render('perfil');
    }
   
}

module.exports = perfilController;