const fs = require('fs');
const { v4 } = require('uuid');

const { uploadPath } = require('../src/config/upload')


let db_eventos = require('../src/database/db_eventos.json');

const writeToDB = () => {
    const json = JSON.stringify(db_eventos);
    fs.writeFileSync('src/database/db_eventos.json', json)
}

const Evento = {
    findAll: () => db_eventos.eventos,

    findById: (id) => {
        const evento = db_eventos.eventos.find(evento => evento.id === id);
        return evento;
    },

    create: (evento, avatar) => {
        db_eventos.eventos.push({ id: v4(), ...evento, avatar});
        writeToDB();
    },

    removeAvatar: (id) => {
        const evento = db_eventos.eventos.find(evento => evento.id === id);
        fs.unlinkSync(
            `${uploadPath}/${evento.avatar}`
        )

    },

    update: (id, evento, avatar) => {
        const eventoIndex = db_eventos.eventos.findIndex(evento => evento.id === id);
        db_eventos.eventos[eventoIndex] = { id, ...evento, avatar };
        writeToDB();


    },

    delete: (id) => {
        const eventoIndex = db_eventos.eventos.findIndex(evento => evento.id === id);
        db_eventos.eventos.splice(eventoIndex, 1);
        writeToDB();
    }

    

}

module.exports = Evento