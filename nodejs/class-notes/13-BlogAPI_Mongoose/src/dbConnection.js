"use strict"

const { default: mongoose } = require("mongoose")

/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */


const  mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/')
.then (()   => console.log('DB connected *'))
.catch ((err)   => console.log('DB NOT connected *'))
