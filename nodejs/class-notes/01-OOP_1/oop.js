'use strict';

//  Objects

// const exampleObject = {

// propertyName:'value',
// methodName: function () {
//     return ' This is method'
// }

// }

// console.log(exampleObject.propertyName)
// console.log(exampleObject.methodName)

// const Car = {
//   brand: 'Ford',
//   model: 'Mustang',
//   year: 1967,
//   isAutoGear: true,
//   color: ['white', 'red'],
//   details: {
//     color1: 'red',
//     color2: 'white',
//     engineSize: 4900,
//   },

//   startEngine: function () {
//     return 'Motor calisti.';
//   },
// };

// console.log(Car.brand)
// console.log(Car.color[0])
// console.log(Car.details)
// console.log(Car.details.engineSize)
// console.log(Car.startEngine())

// console.log(Car['brand'])
// console.log(Car.details['engineSize'])
// console.log(Car['details'] ['engineSize'])
// console.log(Car['startEngine']())

// **************************


//  ! This Keyword

const Car = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    color: ['white', 'red'],
    details: {
      color1: 'red',
      color2: 'white',
      engineSize: 4900,
    },
  
    startEngine: function () {
      return 'Motor calisti.';
    },

    getDetails:function(){

//   return this
//    return this.brand + ' ' + this.model 
return this.startEngine()

    },

   arrowFunc: () => {

  return this

   }
  };

// console.log(Car.getDetails ())
console.log(Car.arrowFunc())