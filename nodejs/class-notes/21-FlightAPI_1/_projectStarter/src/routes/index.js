"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/



// URL: 

// auth:
router.use('/auth', require('./auth'))
// document:
router.use('/documents', require('./document'))
router.use('/flights', require('./flight'))
router.use('/passengers', require('./passenger'))
router.use('/reservations', require('./reservation'))
router.use('/users', require('./user'))

/* ------------------------------------------------------- */
module.exports = router