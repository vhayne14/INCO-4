const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const db = require('../database')



router.get('/',(req,res)=>{

    res.render('pages/login', {
        message: req.query.message
      })
    
})

router.post('/',(req,res)=>{
    const {email, password} = req.body
    // 1. validate (e.g. joi)

    // 2. Check db if email exists alr
        //2.1 Clean email
    const cleanedEmail = email.toLowerCase().trim()

    db.oneOrNone('SELECT * FROM users WHERE email = $1;', email)
    .then(userExists => {
        if (!userExists) {
            res.redirect('/login?message=User%20credentials%20incorrect')
            
        } else {
    // 3. verify pw and edit session (e.g. regEx)
            bcrypt.compare(password,userExists.password)
            .then(result => {
                if (result) {
                    console.log(userExists.id);
                    req.session.userId = userExists.id;
                    // edit session and redirect success msg
                    res.send('Successfully logged in')
                }
                else{
                    res.redirect('/login?message=User%20credentials%20incorrect')

                }
            })
            .catch(err =>{
                console.log(err);
                res.send(err);
            })
            
            
        }
    })
    .catch(err=>{
        console.log(err);
        res.send(err);

    })
   


})

router.post('/',(req,res)=>{

})



// router.get('/new',(req,res)=>{
//     res.render('signup.ejs')
// })


// router.route('/new')
// .get((req,res)=>{

// })
// .post()

module.exports = router