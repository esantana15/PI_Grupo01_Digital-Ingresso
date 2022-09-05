
const Cliente = require('../models/Cliente')





const clienteController = {
    cadastro: (req, res) => {
        res.render('cadastro')
    },
    show: (req, res) => {
        const { id }= req.params;
        const cliente = Cliente.findById(id);
        res.render ('perfil', { cliente })
    },
    create_cliente: (req, res) => {
    const cliente = req.body;
    // const avatar = req.file.filename;
    Cliente.create(cliente);
    res.redirect('/shows')
    }


}

module.exports = clienteController;