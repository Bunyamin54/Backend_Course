"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require('mongoose')

const nameSchema = new mongoose.Schema({

 //  _id  AUTO  CREATED 

 //fieldName: String // shorthands Uaing

 fieldName : {
    type: String,   // veri tipi
    default: null,  // dafault bir  deger atama
    trim:true,  // gelen veriyi trimden gecirme boslugu alma trim data
    select: true, // show /unshow 

 }

}, {})