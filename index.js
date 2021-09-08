require('dotenv').config();
const express = require ('express');
const morgan = require('morgan');
const signupRouter = require('./routes/signup');

const app = express()
const PORT = process.env.PORT || 3000


// body parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// view engine - TBA

// route middleware
app.use('/signup',signupRouter)


app.get('/login', (req, res) => {
    res.send(req.query.message)
  })

app.listen(PORT, () => console.log(`App is listening at http://localhost:${PORT}`))