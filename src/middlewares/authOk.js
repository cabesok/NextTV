module.exports = function authOk(req, res, next){
    
    

    if (/* req.session &&  */req.session.userLogged) {
        next()

        
    } else {
        res.redirect("/user/login")
    }

    
}