'use strict';

/*  ---------------------------*
const exampleObject = {

    propertyName : 'value',

    methodName : function () {

        return 'This is Method'
    }
}

console.log (exampleObject.propertyName)
console.log(exampleObject.methodName())


 const Car =  {


    brand:'Ford',
    model:'Mustang',
    year:1967,
    isAutoGear:true,
    color:['white', 'red'],
    
   details :{
    color1:'red',
    color2:'white',
    engineSize:4900,
   },
     
   startEngine : function () {
    return 'Motor Calisti'
   }
 }
/*  ---------------------------*
 
const Car =  {

    brand:'Ford',
    model:'Mustang',
    year:1967,
    isAutoGear:true,
    color:['white', 'red'],
    
   details :{
    color1:'red',
    color2:'white',
    engineSize:4900,
   },
     
   startEngine : function () {
    return 'Motor Calisti'
   },

   getDetails:function() {
    return this
    return this.brand + ' ' + this.model + ' ' + this.year 
    return this.startEngine()
   },

   arrowFunc: () => {
   return this
return this.brand // undefined
   
   }
  
 }

 console.log(Car.getDetails ())
 console.log(Car.arrowFunc())


 console.log(object)


console.log(Car.brand)
console.log(Car.color[0])
console.log(Car.details)
console.log(Car.details.engineSize)
console.log(Car.startEngine())

console.log(Car['brand'])
console.log(Car.details['engineSize'])
console.log(Car.details['color2'])
console.log(Car['details'] ['enginSize'])
console.log(Car['startEngine']())
!  Objects

const exampleObject = {

propertyName:'value',
methodName: function () {
    return ' This is method'
}

}

console.log(exampleObject.propertyName)
console.log(exampleObject.methodName)

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
};

console.log(Car.brand)
console.log(Car.color[0])
console.log(Car.details)
console.log(Car.details.engineSize)
console.log(Car.startEngine())

console.log(Car['brand'])
console.log(Car.details['engineSize'])
console.log(Car['details'] ['engineSize'])
console.log(Car['startEngine']())

**************************

 ! This Keyword

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

  return this
   return this.brand + ' ' + this.model
return this.startEngine()

    },
 objelerde claslarda arrow func kullanilmasi tavsiye edilmez cunku bos
Arrow functions is globalScope (Not working this keyword)
   arrowFunc: () => {

  return this

   }
  };

console.log(Car.getDetails ())
console.log(Car.arrowFunc())

! Array Destructuring

const testArray = ['value0', 'value1', 'value2', 'value3'];

const var0= testArray[0]
const var1= testArray[1]
? siralama onemli desturcturingde
const [firstItem, secondItem ] =testArray

console.log(firstItem,secondItem)

? RestOperator  (en sonda olmak zorunda)

const [first, second, ...others] = testArray;

console.log (first, second, others); //! 1. ve 2. veri degisken olarak digerleri restmethodu ile Array icinde geldi.

const [...arr] = testArray

console.log(arr)

? Spreadoperator (Dagitici)  diziye dizi eklemek

const newarr = [...testArray, 'new-value1', ' new-value2' ]

console.log(newarr)

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
};

! Rest
const {year, model, brand, ...otherItems} =Car

console.log(year, model, brand)
console.log(otherItems)

const {modelYear, model: newName, brand} = Car;

console.log (modelYear, newName, brand);
console.log (Car);

!  Spread
const newObj = {
  ...Car.color,
  newKey: 'new-value',
};

console.log (newObj);

******   Object to Json   json string datadir.  json objeleri itterable degildir.

const json = JSON.stringify (Car);
console.log (typeof json, json);

! JSON TO OBJECT

const newObj2 = JSON.parse (json);

console.log (typeof newObj2, newObj2);

!object to Array  objenin valuleri array cevirebilirz

const arr= [...Car]

const arr =Object.entries(Car)
console.log(arr)
const arr2= Object.values(Car)
console.log(arr2)
const arr3 = Object.keys(Car)
console.log(arr3)

! ******* Constructure function
? "NEW KEYWORD"

const PascalCaseNamed = function () {
    this.property ='value'
}


const CarContructor = function (brand, model, year=2011) {

    this.brand= brand
    this.model=model
    this.isActive =true
    this.isRunning= false
    this.year=year
    this.startEngine = function () {
        this.isRunning= true
        return ' Motor Calisti'
    }
}


 const newCar = new CarContructor('Ford', 'Mustang', 1967)
 const newCar2 = new CarContructor('Toyota', 'Corolla')

 console.log(newCar)
console.log(newCar2)

console.log(newCar2.isRunning)
console.log(newCar2.startEngine())
console.log(newCar2.isRunning)

const Car2 = {
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
};

// /* ---------------------------------------*
const Car =  {

    brand:'Ford',
    model:'Mustang',
    year:1967,
    isAutoGear:true,
    color:['white', 'red'],
    
   details :{
    color1:'red',
    color2:'white',
    engineSize:4900,
   },
     
   startEngine : function () {
    return 'Motor Calisti'
   },

Arrray Desturcturing 

const testArray = ['value0', 'value1', 'value2', 'value3']
? Siralama onemli 

const [firstItem, secondItem] = testArray

console.log(firstItem, secondItem)


! rest operator
const [first, second, ...others] = testArray

console.log(first,second,others)



 
/* ---------------------------------------
  
! Spread operator  ekleme

const testArray = ['value0', 'value1', 'value2', 'value3']

const newArr = [...testArray, 'new-value', ' new-value2']

console.log(newArr)



/* ---------------------------------------*/

  
// const Car =  {

//     brand:'Ford',
//     model:'Mustang',
//     year:1967,
//     isAutoGear:true,
//     color:['white', 'red'],
    
//    details :{
//     color1:'red',
//     color2:'white',
//     engineSize:4900,
//    },
     
//    startEngine : function () {
//     return 'Motor Calisti'
//    },


// }


// const {year, model, brand, ...otherItems} = Car

// console.log(year,model, brand)
// console.log(otherItems)

// const {year:ModelYear, model:NewName, brand, ...otherItems} = Car

// console.log(ModelYear,NewName, brand)

// const newObj = {

//     ...Car,
//     newKey: 'new-value'
// }

// console.log(newObj)
// console.log(object)
/* ---------------------------------------*

Object to json
const json = JSON.stringify(Car)

console.log(typeof json, json)

!json to object

const newObj2 = JSON.parse(json)

console.log(typeof newObj2, newObj2)

! objec to Array


const arr = [ ...Object.entries(Car)]

console.log(arr)

const arr2 =Object.values(Car)
console.log(arr2)

const arr3 =Object.keys(Car)
console.log(arr3)
/* ---------------------------------------*/
/* ---------------------------------------*/

//* Constructure funcction
const Car =  {

    brand:'Ford',
    model:'Mustang',
    year:1967,
    isAutoGear:true,
    color:['white', 'red'],
    
   details :{
    color1:'red',
    color2:'white',
    engineSize:4900,
   },
     
   startEngine : function () {
    return 'Motor Calisti'
   },


}


const PascalCaseNamed = function () {
    this.property = 'value'
}

const CarConstructor = function (brand, model, year) {

    this.brand = brand
    this.model = model
    this.year = year
    this.startEngine = function () {
        return 'Motor Calisti'
    }
}


const newCar = new CarConstructor ('Ford', 'Mustang', 1967)
console.log(newCar)


const newCar2 = new CarConstructor ('Toyota', 'Corolla', 2010)
console.log(newCar2)
/* ---------------------------------------*/