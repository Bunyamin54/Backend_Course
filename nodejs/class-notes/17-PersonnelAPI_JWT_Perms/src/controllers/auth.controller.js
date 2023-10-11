"use strict"
/* ---------------------------------

 EXPRESS - PERSONAL API
------------------------------------*/
// JWT
// NPM I JSONWEBTOKEN

 const Personnel = require ('../models/personnel.model')
module.exports = {

    login : async (req, res ) => {
    
     const { username, password}  = req.body  

     if () username && password)  {

        const user = await Personnel.findOne ({username, password })

          if (user)  {

            if (user.isActive)  {

            } else{

                res.errorStatusCode = 401
                    throw new Error('This account is not active.')
            }


          }
     }

    },


    refresh : async (req, res ) => {


    },


    logout : async (req, res ) => {


    }



}