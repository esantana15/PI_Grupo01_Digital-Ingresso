const fs = require('fs');
const { v4 } = require('uuid');

let db_clientes = require('../src/database/db_clientes.json');

const writeToDB = () => {
    const json = JSON.stringify(db_clientes);
    fs.writeFileSync('src/database/db_clientes.json', json);
}

const Cliente = {
    findAll: () => {
        return db_clientes
    },

    create: (clientes) => {
        db_clientes.clientes.push({ id: v4(), ...clientes });
        writeToDB();
    },

}

module.exports = Cliente