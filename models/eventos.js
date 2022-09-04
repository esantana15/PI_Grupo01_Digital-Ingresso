// para escrever no arquivo json
const fs = require('fs');

// para criar os id's dos usuarios
const {v4} = require('uuid');
const { uploadPath } = require('../config/upload');

// para importar o arquivo json que vai servir como banco de dados. fazendo isso
// estou trazendo tudo que está no arquivo json para dentro da memória
let db = require('../database/db.json');

//criando uma função auxiliar para gravar os arquivos da memória no arquivo json
const writeToDB = () => {
    const json = JSON.stringify(db);
    //para escrever os arquivos da memoria que foram transformados em json, usamos esse
    fs.writeFileSync('src/database/db.json', json);

}

//implementando a model:
//metodo create que vai receber os dados de um usuario para gente agora salvar os dados no 
//banco de dados. vamos chamar o db, que é um json entao na memoria ele vira um objeto.
// dentro do db tenho a propriedade  users que um array e para adicionar no array usamos o push
// dentro do push passo o objeto que vai ter os dados do usuario.
// vamos passar um id é um identificador unico, com a função v4.
 const User = {
    findAll: () => db.users,

    //implementando o findById
    findById: (id) => {
        const user = db.users.find(user => user.id === id);
        return user;
    },

    removeAvatar: (id) => {
        const user = db.users.find(user => user.id === id);
        fs.unlinkSync(
            `${uploadPath}/${user.avatar}`
        )

    },

    create: (user, avatar) => {
        db.users.push({ id: v4(), ...user, avatar });
        //chamando a função que é responsável por salvar os dados no json, se não chamarmos ele só ficará na memória enquanto o servidor estiver sendo executado
        writeToDB();
    },

    update: (id, user, avatar) => {
        const userIndex = db.users.findIndex(user => user.id === id);
        db.users[userIndex] = { id, ...user, avatar };
        writeToDB();
      },

    delete: (id) =>{
        const userIndex = db.users.findIndex(user => user.id === id);
        db.users.splice(userIndex, 1);
        writeToDB();
    }
 }

 module.exports = User;