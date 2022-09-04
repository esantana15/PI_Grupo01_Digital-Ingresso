const fs = require('fs');
const { v4 } = require('uuid');


let db_eventos = require('../src/database/db_eventos.json');

const writeToDB = () => {
    const json = JSON.stringify(db_eventos);
    fs.writeFileSync('src/database/db_eventos.json', json)
}

const Evento = {
    create: (evento, avatar) => {
        db_eventos.eventos.push({ id: v4(), ...evento, avatar});
        writeToDB();
    }

}

module.exports = Evento