const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const { User, Address } = require("../database/models");


const loginController = {
    loginForm: (req, res) => {
        return res.render('login_cadastro');
    },

    // logarUser: function (req, res) {
    //     let {email, password} = req.body
    //     let usersReturned = db.User.findAll()

    //     .then((usersReturned) => {
    //         console.log(usersReturned)

    //     if(email != usersReturned.email) {
    //         return res.send('usuario invalido')
    //     }
    //     if(!bcrypt.compareSync(password, usersReturned.password)) {
    //         return res.send("Senha invalida")
    //     }
    // })

    //     return res.send("deu certo")


    // }

    loginProcess: async function (req, res) {
        console.log('aqui')

        try {
            const usersToLogin = await User.findOne({
                // attributes:['id', 'email', 'password'],
                where: {
                    email: req.body.email
                }
            });          
    
            console.log('aqui')
            console.log(req.session);  
            console.log('aqui', usersToLogin)
            
            if (usersToLogin) {
                let isPasswordVerified = bcrypt.compareSync(req.body.password, usersToLogin.password);
    
            if (isPasswordVerified) {
                delete usersToLogin.password
                req.session.userLogged = usersToLogin
                console.log(req.session);
    
                return res.redirect('/users/perfil');
            }
    
            return res.render("login_cadastro", {
                errors: {
                    email: {
                        msg: 'Usuário ou senha invalidos'
                    }
                }
            })
        }
        } catch (error) {
            console.log("-------------------------------");
                     console.log(">>>> ERRO: ", error)
    }
},

    profile: (req, res) => {
        //const listaConcertos = Events.findAll() 
        return res.render("perfil", {userLogged: req.session.userLogged}); //, concertos: listaConcertos});
    },

    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/')
    }
}

module.exports = loginController;


