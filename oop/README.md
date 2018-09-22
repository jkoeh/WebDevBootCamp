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

### Prototype chain. 
The way javascript finds methods and function. Instances of classes such as Array has a  \_\_proto\_\_ property that contains methods and properties attach to the Array.prototype. For convenice, we refer to this instance as arr. The \_\_proto\_\_ of arr has another  \_\_proto\_\_ which is Object.prototype. Every time a method is called, javascript will try to look through every method inside each \_\_proto\_\_ in the chain until either the method is found or not found, which would returned undefined.  
### How to add methods and property to prototype?

``` javascript 
function  Person(name){
    this.name = name;
}
var john = new Person('john');
var jason = new Person('jason');

Person.prototype.isEngineer = true;
Person.prototype.sayHi = function(){
    return "Hi " + this.name;
}
expect(john.isEngineer).toBe(true);
expect(jason.isEngineer).toBe(true)
```
### What is the differences between adding methods/properties on constructor function vs prototype?
Properties and methods assigned during constructor will be created each time it's initialized while those assigned thru prototype only initialized once. This is much more efficient when the method/property do not change from instance to instance. 

### implement inheritance through prototype object
1. set prototype to be an object created with another prototype
2. reset the constructor property 
Prototype is how javascript achieved inhertence between classes. 
We cannot assign prototype of one class to another directly because the assignment would a ref assignment which means a change in one class's prototype would propogate the change another class's prototype. 

``` javascript 
//bad example
function  Person(name){
    this.name = name;
}
function Student(firstName){
    this.firstName = firstName;
}
Student.prototype = Person.prototype;
```

Instead, we use Object.create(Person.prototype) to achieve the inhertiance. We do not use the 'new' keyword because that would set the this keyword to Object which would add unecessary property to the object's prototype. When we do this, we must remember to assign constructor property of the child class back to the child class. 
``` javascript 
//correct way
function  Person(name){
    this.name = name;
}
function Student(firstName){
    this.firstName = firstName;
}

Student.prototype = Object.create(Person.prototype);
//Student.prototype.constructor is Person right now
Student.Prototype.constructor = Student;
```