const express = require('express')
const router = express.Router()
const {redirectToLogin} = require('../middleware')

router.get("/", (req,res)=>{
    res.send(`
    <h1> Welcome to homepage</h1>
    <a href ="/logout">Logout</a>
    `)
})

module.exports = router