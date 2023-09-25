"use strict"

// * EXPRESS JS START 
const express = require ('express')
const app= express()

// *  ENV

require ('dotenv').config()
const HOST = process.env?.HOST || 'http://localhost'
const PORT = process.env?.PORT || 8000



//* HTTP METOHDS  &URL

app.get('/', (request, response) =>

{



} )



















//! PORT HOST 
app.listen(PORT,  () => console.log(`Running on ${HOST}:${PORT}`))
