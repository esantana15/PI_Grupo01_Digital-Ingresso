const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const User = require("../database/models/User");


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
        let usersToLogin = await User.findOne('email', req.body.email);
        console.log(req.session);


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
                    msg: 'este email não foi encontrado'
                }
            }
        })
    }
},
    profile: (req, res) => {
        return res.render("perfil2", {
            userLogged: req.session.userLogged
        });
    },

    logout: (req, res) => {
        req.session.destroy();
        return res.render('/')
    }
}

module.exports = loginController;


