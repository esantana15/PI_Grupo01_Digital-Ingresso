const fs = require ('fs');
const {v4} = require ('uuid');

let db = require ('../src/database/db.json')

const writeToDB = () => {
    const json = JSON.stringify(db);
    fs.writeFileSync('scr/database/db.json', json);
}

const user = {
    create: (user) => {
        db.users.push({id: v4(), ...user});
        writeToDB();
    }
}

module.exports = user;
