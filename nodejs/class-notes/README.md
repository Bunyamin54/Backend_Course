"use strict"

/* -------------------------------------------------------
    OOP & CLASSES
------------------------------------------------------- *
? OOP: Object Oriented Programming
? DRY: Don't Repeat Yourself
? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
? CLASS: Obje türetmek için kullanılacak şablon.

// Class Declaration:
// class PascalNamedClassName { ... }

// Class Expression:
const PascalNamedClassName = class {

    undefinedProperty // Onle definition ('undefined')
    extraField = 'field-value'

    ? "new Class" ile obje oluştururken veri göndermek için "constructor" methodu kullanılır.
    constructor (parameter1, parameter2 = 'default-value') {
        this.parameter1 = parameter1
        this.parameter2 = parameter2
    }

    methodName1() {
        return this
    }

    methodName2() {
        return this.extraField
    }
}

? INSTANCE: Bir classtan türetilen objedir.
const instance = new PascalNamedClassName('parameter-1-value', 'parameter-2-value')
console.log( instance )
console.log( instance.methodName2() )
instance.extraField = 'new-value'
console.log( instance.extraField )

/* ------------------------------------------------------- */

class Car {

    isRunning = false

    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Motor Çalıştı')
        return this.isRunning
    }

}



/* ------------------------------------------------------- */