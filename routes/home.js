const express = require('express')
const router = express.Router()
const {redirectToLogin} = require('../middleware')
const db = require('../database')
const day = require("../helper/days")

router.get("/", (req,res)=>{
    

    const newData = db.any('SELECT users.id, firstname, lastname, email, day, start_time, end_time FROM users LEFT JOIN schedules ON users.id =  schedules.user_id;',)
   .then((sched)=>{

        
        // console.log(`dayString == ${dayString}`);
        // newData.forEach(dayString => {
        //     console.log(dayString.day);
        //     dayString.day = day.find( checker => checker.id == checker.name )
        // })
        res.render("pages/home",{
            sched
        })
        // .catch((err)=>{
        //     console.log(err);
        //     res.send(err);
        // })

   })
   .catch((err)=>{
       console.log(err);
       res.send(err)
   })


    
    
    
    // .then((sched)=>{
    //     console.log(sched);
    //     // res.render("pages/allSched", {
    //     //     schedules: sched
    //     // })
    //     res.send(`
        
    // <h1> Welcome to homepage</h1>
    // <p> ${sched} </p>
    // <a href ="/logout">Logout</a>
    
    

    // `)

    // })
    // .catch((err)=>{
    //     console.log(error);
    // })


})


router.get('/profile',(req,res)=>{
    db.any('SELECT users.id, firstname, lastname, email, day, start_time, end_time FROM users LEFT JOIN schedules ON users.id =  schedules.user_id WHERE users.id = $1;',[req.session.userId])
    .then((sched)=>{
        res.render("pages/home",{
            sched
        })
        .catch((err)=>{
            console.log(err);
            res.send(err);
        })

   })
   .catch((err)=>{
       console.log(err);
       res.send(err)
   })
})

router.get('/users/:id',(req,res)=>{
    db.any('SELECT users.id, firstname, lastname, email, day, start_time, end_time FROM users LEFT JOIN schedules ON users.id =  schedules.user_id WHERE users.id = $1;',[Number(req.params.id)])
    .then((sched)=>{
        res.render("pages/home",{
            sched
        })
        .catch((err)=>{
            console.log(err);
            res.send(err);
        })

   })
   .catch((err)=>{
       console.log(err);
       res.send(err)
   })
})



router.get('/new',(req,res)=>{
    db.any('SELECT users.id, firstname, lastname, email, day, start_time, end_time FROM users LEFT JOIN schedules ON users.id =  schedules.user_id WHERE users.id = $1;',[req.session.userId])
    .then((sched)=>{
        res.render("pages/newSched",{
            sched
        })
        .catch((err)=>{
            console.log(err);
            res.send(err);
        })

   })
   .catch((err)=>{
       console.log(err);
       res.send(err)
   })
})




router.post('/new', (req,res)=>{

    db.none('INSERT INTO schedules (user_id, day, start_time, end_time) VALUES ($1, $2, $3, $4);', [req.body.user_id, req.body.day, req.body.start_time, req.body.end_time])
    .then(()=>{
        res.redirect("/");
    })

    .catch((err)=>{
        console.log(err);
        res.send(err)
    })
})


//'SELECT users.id, firstname, lastname, email, day, start_time, end_time FROM users LEFT JOIN schedules ON users.id =  schedules.user_id WHERE users.id = $1;',[req.session.userId]

module.exports = router