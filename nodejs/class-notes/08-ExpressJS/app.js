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
//  response.send(' Welcome to Express')
 response.send({ message: 'called in  "get" method' })
} )

// app.get('/', (request, response) => {
    //? run response.send for print-out:
    // response.send( 'Welcome to Express' )
    // response.send({ message: "called in 'get' method" })
// })

// app.post('/', (request, response) => response.send({ message: "called in 'post' method."}))
// app.put('/', (request, response) => response.send({ message: "called in 'put' method."}))
// app.delete('/', (request, response) => response.send({ message: "called in 'delete' method."}))

//? allow at all methods:
// app.all('/', (request, response) => response.send({ message: "'all' option allows to all methods."})) //* mumkun mertebe kullanilmamali 


//? app.route ('url)


app.route ('/').get ( () )




































































//* listen port
app.listen(PORT, HOST, ()=> console.log(`Running on http://${HOST}:${PORT}`))

















//! PORT HOST 
app.listen(PORT,  () => console.log(`Running on ${HOST}:${PORT}`))
