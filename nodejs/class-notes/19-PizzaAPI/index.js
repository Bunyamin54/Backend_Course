"use strict"   // Brni kurallara uymaya zorla
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
/*
    $ npm i express dotenv mongoose express-async-errors
    $ npm i jsonwebtoken morgan
*/
const express = require('express')
const app = express()

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require('dotenv').config()
const PORT = process.env?.PORT || 8000

// asyncErrors to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

/* ------------------------------------------------------- */
// Middlewares:
//AcceptJson
  app.use(express.json())

  // Run Logger:
app.use(require('./src/middlewares/logger'))

//   res.getModelList():
  app.use(require('./src/middlewares/findSearchSortPage'))
/* ------------------------------------------------------- */
// Routes:
// HomePath:
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to PIZZA API',
        isLogin: req.isLogin,
        user: req.user
    })
})


/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')()