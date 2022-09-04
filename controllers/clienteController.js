

const Cliente = require('../models/Cliente')





const clienteController = {
    cadastro: (req, res) => {
        res.render('cadastro')
    },

    create_cliente: (req, res) => {
    const cliente = req.body
    // const avatar = req.file.filename
        // req.session.teste = cliente
    //  console.log(req.session)
    Cliente.create(cliente);
    res.redirect('/shows')
    }


}

module.exports = clienteController