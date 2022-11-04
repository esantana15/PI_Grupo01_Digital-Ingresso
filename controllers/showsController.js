// const Evento = require('../models/Events');

// const showsController = {
//     index: (req, res) => {
//         const eventos = Evento.findAll();
           


//         return res.render('shows', {eventos})
//     }
// }

// module.exports = showsController;

const showsController = {
    index: (req, res) => {
        return res.render('shows');
    }
}

module.exports = showsController;