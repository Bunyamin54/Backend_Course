"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
    "flightNumber": "IS-AN-001",
    "airline": "THY",
    "departure": "ISTANBUL",
    "departureDate": "2020-10-01 10:00:00",
    "arrival": "ANKARA",
    "arrivalDate": "2020-10-01 12:00:00",
    "createdId": "652ceaa1bae9cde5e8a97522"
  }
/* ------------------------------------------------------- */
// Flight Model:

const FlightSchema = new mongoose.Schema({


    flightNumber: {

        type:String,
        trim:true,
        required:true,
        unique:true
    },

   airline: {
     type: String,
     trim:true,
     required:true,  

   },

   departure: {

    type:String,
    trim:true,
    required:true,

   },

   departureDate:{
 type: Date,
 trim:true,
 required:true,
   },

   arrival: {

    type:String,
    trim:true,
    required:true,

   },

   
   arrivalDate:{
 type: Date,
 trim:true,
 required:true,
   },
    
   createdId: {
    
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    
   },



}, { collection: 'flights', timestamps: true })

/* ------------------------------------------------------- */
module.exports = mongoose.model('Flight', FlightSchema)