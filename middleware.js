<<<<<<< HEAD
module.exports.redirectToLogin = (req, res, next)=>{
    console.log(req.session.userId);
    // if req.session.userId === undefined
    if(!req.session.userId){
        // console.log("helo");
        res.clearCookie('mrcoffee_sid')
        res.redirect('/login')
    }
    else{
        // console.log("asd");
        next()
    }
}


module.exports.redirectToHome = (req, res, next) =>{

    // console.log(req.session.userId);
    if(req.session.userId){
        res.redirect('/')
    }
    else{
        next()
    }
}
=======
module.exports.redirectToLogin = (req, res, next)=> {
    console.log(req.session.userId);
    // if req.session.userId === undefined
    if(!req.session.userId) {
        res.clearCookie('mrcoffee_sid')
        res.redirect('/login')
    } else {
        next()
    }}

module.exports.redirectToHome = (req, res, next) => {
    console.log(req.session.userId);
    if(req.session.userId) {
        res.redirect('/')
    } else {
        next()
    }}

>>>>>>> 0ae3107bd6fe35e76a3a0db439164a241bf1750d
