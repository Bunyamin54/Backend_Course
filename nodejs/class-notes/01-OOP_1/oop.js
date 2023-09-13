'use strict';

//!  Objects

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

// const Car = {
//     brand: 'Ford',
//     model: 'Mustang',
//     year: 1967,
//     isAutoGear: true,
//     color: ['white', 'red'],
//     details: {
//       color1: 'red',
//       color2: 'white',
//       engineSize: 4900,
//     },

//     startEngine: function () {
//       return 'Motor calisti.';
//     },

//     getDetails:function(){

//   return this
//    return this.brand + ' ' + this.model
// return this.startEngine()

//     },
//  objelerde claslarda arrow func kullanilmasi tavsiye edilmez cunku bos
// Arrow functions is globalScope (Not working this keyword)
//    arrowFunc: () => {

//   return this

//    }
//   };

// console.log(Car.getDetails ())
// console.log(Car.arrowFunc())

// ! Array Destructuring

// const testArray = ['value0', 'value1', 'value2', 'value3'];

// const var0= testArray[0]
// const var1= testArray[1]
// ? siralama onemli desturcturingde
// const [firstItem, secondItem ] =testArray

// console.log(firstItem,secondItem)

// ? RestOperator  (en sonda olmak zorunda)

// const [first, second, ...others] = testArray;

// console.log (first, second, others); //! 1. ve 2. veri degisken olarak digerleri restmethodu ile Array icinde geldi.

// const [...arr] = testArray

// console.log(arr)

// ? Spreadoperator (Dagitici)  diziye dizi eklemek

// const newarr = [...testArray, 'new-value1', ' new-value2' ]

// console.log(newarr)

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

// ! Rest
// const {year, model, brand, ...otherItems} =Car

// console.log(year, model, brand)
// console.log(otherItems)

// const {modelYear, model: newName, brand} = Car;

// console.log (modelYear, newName, brand);
// console.log (Car);

// !  Spread
// const newObj = {
//   ...Car.color,
//   newKey: 'new-value',
// };

// console.log (newObj);

// ******   Object to Json   json string datadir.  json objeleri itterable degildir.

// const json = JSON.stringify (Car);
// console.log (typeof json, json);

// ! JSON TO OBJECT

// const newObj2 = JSON.parse (json);

// console.log (typeof newObj2, newObj2);

// !object to Array  objenin valuleri array cevirebilirz

// const arr= [...Car]

// const arr =Object.entries(Car)
// console.log(arr)
// const arr2= Object.values(Car)
// console.log(arr2)
// const arr3 = Object.keys(Car)
// console.log(arr3)

// ! ******* Constructure function
// ? "NEW KEYWORD"

const PascalCaseNamed = function () {
    this.property ='value'
}


const CarContructor = function (brand, model, year=2011) {

    this.brand= brand
    this.model=model
    this.isActive =true
    this.year=year
    this.startEngine = function () {
        return ' Motor Calsiti'
    }
}


 const newCar = new CarContructor('Ford', 'Mustang', 1967)
 const newCar2 = new CarContructor('Toyota', 'Corolla')

 console.log(newCar)
console.log(newCar2)
// const Car2 = {
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
