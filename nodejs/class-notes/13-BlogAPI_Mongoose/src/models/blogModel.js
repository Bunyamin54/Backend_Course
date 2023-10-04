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
    index: false, // veri tabanlarindaki ndex kavrami aha hizli ulasmak icin bir sutuna 
    unique:false , // benzersiz kayit
    //required:true, 
    required: [true, 'Error message '],
    enum: [[0,1,2,3], 'Error-Massage'] , //   Pattern sabitleme sinirlama 
    validate: [validateFunction, 'Error-Message' ]  // [function(data) {return true}, 'Error-Message']

 }

}, {})