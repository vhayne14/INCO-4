require('dotenv').config();
const express = require ('express');
const morgan = require('morgan');
const session = require('express-session')
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');
const userRouter = require('./routes/dashboard');
const sessionConfig = require('./session');
const app = express()
const PORT = process.env.PORT || 3000


// body parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// view engine - TBA

// session road
// app.use(session({
//   cookie:{
//     maxAge: 1000*60*60*24
//     // secure: process.env.NODE_ENV === true
//   },
//   name: 'mrcoffee_sid',
//   resave: false,
//   saveUninitialized: false,
//   secret: process.env.SESS_SECRET
// }))
app.use(session(sessionConfig))



// route middleware
app.use('/signup',signupRouter)
app.use('/login',loginRouter)
app.use('/dashboard', userRouter)


app.use(morgan('dev'))

// Set our static folder
app.use(express.static('public'))


app.get('/login', (req, res) => {
    res.send(req.query.message)
  })

app.listen(PORT, () => console.log(`App is listening at http://localhost:${PORT}`))