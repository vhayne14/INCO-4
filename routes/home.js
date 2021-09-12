const express = require('express')
const router = express.Router()
const {redirectToLogin} = require('../middleware')
const db = require('../database')

router.get("/", (req,res) => {
    db.any('SELECT users.id, firstname, lastname, email, day, start_time, end_time FROM users LEFT JOIN schedules ON users.id =  schedules.user_id;',)
   .then((sched) => {
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



router.get("/profile",(req,res)=>{
    db.any('SELECT users.id, firstname, lastname, email, day, start_time, end_time FROM users LEFT JOIN schedules ON users.id =  schedules.user_id WHERE users.id = $1;',[req.session.userId])
    .then((sched)=>{
        res.render("pages/home",{
            sched
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

//'SELECT users.id, firstname, lastname, email, day, start_time, end_time FROM users LEFT JOIN schedules ON users.id =  schedules.user_id WHERE users.id = $1;',[req.session.userId]

module.exports = router