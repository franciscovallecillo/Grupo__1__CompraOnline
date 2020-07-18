
function logMiddleware (req,res,next){
    console.log(req.session.log);
    if ( req.session.log === "si"){
        console.log("middleware0");
        next()

    } else {
        res.redirect("/login")
        console.log("middleware1");
    }
}

module.exports = logMiddleware;