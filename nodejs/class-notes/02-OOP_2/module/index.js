"use strict"

/* -------------------------------------------------------
    MODULES
------------------------------------------------------- */

// console.log('index.js çalıştı.')

// const test = function() {
//     console.log('index.js çalıştı.')
// }

// // EXPORT:
// module.exports = test

/* ------------------------------------------------------- */

// ! birden fazla functionu 
const test1 = function() {
    console.log('test1 çalıştı.')
}
const test2 = function() {
    console.log('test2 çalıştı.')
}
const test3 = function() {
    console.log('test3 çalıştı.')
}

module.exports= {

    test1,
    test2,
    test3,

}

  

