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

