const user = require ('../models/user')
const userController = {
    index: (req, res) => {
        res.render('/login');
    },
    // createForm: (req, res) =>{
    //     res.render('/cadastro');
    // }
    create: (req, res) =>{
        const user = req.body;
        const avatar = req.file.fileName;
        user.create(user, avatar);
        res.redirect ('/');

    },
}



module.exports = userController;