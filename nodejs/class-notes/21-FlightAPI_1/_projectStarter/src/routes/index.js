"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/



// URL: 

// auth:
router.use('/auth', require('./src/routes/auth'))
// document:
router.use('/documents', require('./src/routes/document'))
router.use('/flights', require('./src/routes/flight'))
router.use('/passengers', require('./src/routes/passenger'))
router.use('/reservations', require('./src/routes/reservation'))
router.use('/users', require('./src/routes/user'))

/* ------------------------------------------------------- */
module.exports = router