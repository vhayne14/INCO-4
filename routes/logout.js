const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
            res.send(err);

        }
        else{
            res.clearCookie('mrcoffee_sid')
            res.redirect('/login')
        }
    })
})

<<<<<<< HEAD
module.exports = router
=======
module.exports = router
>>>>>>> 0ae3107bd6fe35e76a3a0db439164a241bf1750d
