// PART 1

// Create a constructor function for a Person, 
//each person should have a firstName, lastName, favoriteColor and favoriteNumber.
// Your function MUST be named Person. 

// Write a method called multiplyFavoriteNumber 
// that takes in a number and returns the product of the number and the object 
// created from the Person functions' favorite number.

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.multiplyFavoriteNumber = function (secondNum) {
        return secondNum * this.favoriteNumber;
    }
}

// PART 2

// Given the following code - refactor the Child function to remove all 
// the duplication from the Parent function. You should be able to remove 
// 4 lines of code in the Child function and replace it with 1 single line.

function Parent(firstName, lastName, favoriteColor, favoriteFood) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood) {
    Parent.apply(this, arguments);
}

function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function () {
    this.isRunning = true
}
Vehicle.prototype.turnOff = function () {
    this.isRunning = false
}
Vehicle.prototype.honk = function () {
    if (this.isRunning) {
        return "beep";
    }
}