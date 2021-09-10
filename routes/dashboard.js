const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const db = require('../database')

// dysplay all schedules = homepage

router.get('/schedules', (req, res) => {
    db.any('SELECT * FROM schedules;')
    .then((schedulesData) => {
      res.render('pages/dashboard', {
        schedules: schedulesData
      })
    })
    .catch((err) => {
      res.send(err.message)
    })
  })

// dysplay schedules of logged-in user

router.get('/user/id/schedules', (req, res) => {
    db.any('SELECT * FROM users WHERE id = $1', [Number(req.params.id)+1])
    .then((users)=>{
        res.render("pages/user_schedules",{
            getUser: users
        })
    })
    .catch((err)=>{
        console.log(err)
        res.send(err)
    })
});

// add new schedule for user

router.get("/schedules/new", (req, res) => {
    res.render("./pages/form_new_schedule")
})

router.post("/schedules/new", (req, res) => {
    db.none('INSERT INTO schedules (user_id, day, start_at, end_at) VALUES ($1, $2, $3, $4,);',
    [req.body.user_id, req.body.day, req.body.start_at, req.body.end_at])
    .then(()=>{
        res.redirect("pages/dashboard");
    })
    .catch((err)=>{
        console.log(err);
        res.send(err)
    })
  })


//delete or edit existing schedule

module.exports = router

