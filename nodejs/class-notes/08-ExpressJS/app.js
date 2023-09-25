"use strict"


const express = require ('express')
const app= express()

// *  ENV

require ('dotenv').config()
const HOST = process.env?.HOST || 'http://localhost'
const PORT = process.env?.PORT || 8000


app.listen(PORT,  () => console.log(`Running on ${HOST}:${PORT}`))
console.log(PORT)
console.log(HOST)