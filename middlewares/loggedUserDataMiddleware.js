function loggedUserDataMiddleware(req, res, next) {
    res.locals.islogged = false;

    if (req.session.userLogged){
        res.locals.islogged = true
    }

    next()

}

module.exports = loggedUserDataMiddleware