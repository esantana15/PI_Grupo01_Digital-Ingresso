const Cliente = require ('../models/Cliente')
const perfilController = {
    index: (req, res) => {
        return res.render('perfil');
    }
   
}

module.exports = perfilController;