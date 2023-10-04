"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// Catch errros  errro handler hata yakalaayici bunu yazinca nodejs anliyor


module.exports = (err, req, res, next) => {


  const errorStatusCode = res.errorStatusCode ?? 500

   res.status(errorStatusCode).send( {

   error: true, 
   message : err.message,
   cause: err.cause,
   body:req.body

   })

}