// const Evento = require('../models/Events');

// const homeController = {
//     index: (req, res) => {
//         const eventos = Evento.findAll();
//         return res.render('index', {eventos});
//     },
// }

// module.exports = homeController;

const homeController = {
    index: (req, res) => {
        return res.render('index');
    }
}

module.exports = homeController;