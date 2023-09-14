"use strict"

/* -------------------------------------------------------
    MODULES
------------------------------------------------------- */
//? Başka bir JS dosyasını içe aktarma:

// require('./module/index.js')
// require('./module/index')
// require('./module/')

// Export:
const test = require('./module/')
test()

// Shorthand for singleFunction:
require('./module/')()

/* ------------------------------------------------------- */