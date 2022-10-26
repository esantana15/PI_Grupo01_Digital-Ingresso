const concertoController = {
    create: (req, res) => {
        return res.render('evento/criarShow');
    },

    register: function (req, res) {
        db.Event.create({
            evento: req.body.event,
            foto: req.body.picture
        })
            .then(() => resredirect('/'))
            .catch((error) = console.log(error))
    }
}




module.exports = concertoController;