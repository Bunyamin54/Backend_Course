"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require('mongoose')

// const nameSchema = new mongoose.Schema({

 //  _id  AUTO  CREATED 

 //fieldName: String // shorthands Uaing

 // ! Default model tanimlamasi bu sekilde asakidaki dosyaseklinde 

//  fieldName : {
//     type: String,   // veri tipi
//     default: null,  // dafault bir  deger atama
//     trim:true,  // gelen veriyi trimden gecirme boslugu alma trim data
//     select: true, // show /unshow 
//     index: false, // veri tabanlarindaki ndex kavrami aha hizli ulasmak icin bir sutuna 
//     unique:false , // benzersiz kayit
//     //required:true, 
//     required: [true, 'Error message '],  // Data Json data icinde gelmesi zorunlu mu?
//     enum: [[0,1,2,3], 'Error-Massage'] , //   Pattern sabitleme sinirlama 
//     validate: [validateFunction, 'Error-Message' ] , // [function(data) {return true}, 'Error-Message']  veriyi filtreden geciren function
//     get: function(data) {return true},  // veri cagirirken calsitrilcak functino 
//     set: function(data) {return true},  // veri akydederken calistrilacak function 
//  }

// }, {

//    collection: 'collectionName',  // tablo ismi ne olsun
//    timestamps: true,  // created and manage created and updated


// })

const blogPost = new mongoose.Schema ({

  title: {
    type: String,
    trim: true,
    require:true
  },

   content : {

     type:String,
     trim:true,
     require:true

   },

     published: {
     type:Boolean,
     default:true

     },

   // createdAt
   //updatedAt  otomatik elenecek

}, {collection: 'blogPosts', timestamps:true})