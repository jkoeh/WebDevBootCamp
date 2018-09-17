# Object Oriented Programming
## Intro to oop
### What is oop?
It is a programming model based around objects. These objects are constructed from classes, which are like blueprints. The object created by a class is called instances. It is important to keep classes abstract and modular for cleaner code. 
An instance relies on the keyword 'new' and constructor to be initialized. 
### constructor function
``` javascript 
function  Building(bedroom, sqft, bathroom){
    this.bedroom = bedroom;
    this.sqft = sqft;
    this.bathroom  = bathroom;
}
```
### What is 'new' and what does it do?
The 'new' keyword is used to initialized a instance. When it is called it
- creates an empty object
- assign 'this' with this empty object
- adds return 'this' in the end of the function
- assign property onto the empty object called \_\_proto\_\_, which links the prototype property on the constructor function to the empty object
``` javascript 
var building = new Building(3, 2000, 2);

```
### utilization of call and apply in constructor
when two classes have lots of overlapping parameters in constructor function, we do not want to repeat them. But we cannot directly call the building  constructor inside the residentialhouse constructor either because if we do that, the property would be assigned to building not residential house. 
``` javascript 
function  ResidentialHouse(bedroom, sqft, bathroom){
    new Building(bedroom, sqft, bathroom)
}
// instance created by ResidentialHouse would not have any property 
```
so we could use call or apply to be explicit on our assignment of 'this'.
``` javascript 
function  ResidentialHouse(bedroom, sqft, bathroom){
    Building.call(this, bedroom, sqft, bathroom)
}
function  ResidentialHouse(bedroom, sqft, bathroom){
    Building.apply(this, bedroom, sqft, bathroom)
}
function  ResidentialHouse(bedroom, sqft, bathroom){
    Building.apply(this, arguments)
}
```

## Prototype
### What is prototype?
A prototype is a property of every function in javascript. The .prototype object inturn has has a .constructor property which is points back to the function. The properties and methods attached to a class thru prototype are accessible to all object created by the class's constructor function.
### What is the relationship between prototype, \_\_proto\_\_, and constructor
To access the prototype method and properties from the instance created by constructor function, we use .\_\_proto\_\_ on the instance. This link is created by 'new' keyword.

### How to add methods and property to prototype?

### What is the differences between adding methods/properties on constructor function vs prototype?

### implement inheritance through prototype object