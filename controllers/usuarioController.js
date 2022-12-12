const { where } = require('sequelize');
const db = require('../database/models');
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator');
 

const usuarioController = {
    create: (req, res) => {
        return res.render('userRegister1')
    },
    createAddress: (req, res) => {
        return res.render('userRegister2')
    },
    createAccess: (req, res) => {
        return res.render('userRegister3')
    },
    

    register: async  (req, res) => {
        try {
            const errors = validationResult(req);

            if(!errors.isEmpty()) {
                console.log(errors.mapped());
                return res.render("userRegister1", { errors: errors.mapped });
            }
        } catch (error) {
            console.log("-------------------------------");
                 console.log(">>>> ERRO: ", JSON.stringify(error?.parent?.sqlMessage));
                 //Sempre use isso para saber o erro do sequelize
                 console.log("-------------------------------"); 
         }


        let password = req.body.password
        let senhaC = bcrypt.hashSync(password, 10)

        try {
            const usuarios = await db.User.create({
                nomeCompleto: req.body.nome,
                cpf: req.body.cpf,
                dataNascimento: req.body.data,
                sexo: req.body.sexo,
                fotoPerfil: req.file.filename,
                email: req.body.email,
                emailConfirm: req.body.emailConfirm,
                password: senhaC,
                passwordConfirm: req.body.passwordConfirm, 
                       
            })
            console.log(usuarios)
                db.Address.create({
                    rua: req.body.rua,
                    numero: req.body.numero,
                    complemento: req.body.complemento,
                    bairro: req.body.bairro,
                    cidade: req.body.cidade,
                    estado: req.body.estado,
                    pais: req.body.pais,
                    cep: req.body.cep, 
                    usuario_id: usuarios.id   
                    
                })
            

            res.redirect('/users/login')

        } catch (error) {
           console.log("-------------------------------");
                console.log(">>>> ERRO: ", JSON.stringify(error?.parent?.sqlMessage)); //Sempre use isso para saber o erro do sequelize
                console.log("-------------------------------"); 
        }
        
    },

    registerAddress:  (req, res) => {

        // .then(() => res.redirect('/cadastro/create-access'))
        return res.send('Arquivo enviado com sucesso')
        .catch((error) => console.log(error))  
    },

    // registerAccess:  (req, res) => {

    //     db.UserAccess.create({
    //         email: req.body.email,
    //         emailConfirm: req.body.emailConfirm,
    //         password: req.body.password,
    //         passwordConfirm: req.body.passwordConfirm,    
            
    //     })
    //     .catch((error) => console.log(error))  
    //     return res.send('Arquivo enviado com sucesso');

    // },
    
}

module.exports = usuarioController;

