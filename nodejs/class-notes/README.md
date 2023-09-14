# Nodejs Session Class-notes
//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon.

// Class Declaration
class PascalNamedClassName {....}

//Classs expression

const PascalNamedClassName = class {

    undefinedProperty  // Onle definition ('undefined)
    extraFiel = 'field-value'


    methodName1() {
        return this
    }

    methodName2() {

        return this.extraField

    }
}

// Instance : Bir classtan turetilen objedir 

const instance =new PascalNamedClassName()
console.log

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