"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/Reservation:

const permissions = require('../middlewares/permissions')
const Reservation = require('../controllers/reservation')

// URL: /Flights

router.route('/')
    .get(permissions.isAdmin, Reservation.list)
    .post(Reservation.create)

router.route('/:id')
    .get(permissions.isLogin, Reservation.read)
    .put(permissions.isLogin, Reservation.update)
    .patch(permissions.isLogin, Reservation.update)
    .delete(permissions.isAdmin, Reservation.delete)

/* ------------------------------------------------------- */
module.exports = router