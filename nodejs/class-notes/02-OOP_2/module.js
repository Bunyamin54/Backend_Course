"use strict"

/* -------------------------------------------------------
    MODULES
------------------------------------------------------- */
//? Başka bir JS dosyasını içe aktarma:

// require('./module/index.js')
// require('./module/index')
// require('./module/')

// // Export:
// const test = require('./module/')
// test()

// Shorthand for singleFunction:
// require('./module/')()

/* ------------------------------------------------------- */

const {test1, test2, test3}  = require('./module/')

test1(), test2(), test3()