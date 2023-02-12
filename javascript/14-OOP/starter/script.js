'use strict';

 const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
 } 
 Person.prototype.calculateAge = function(){
    console.log(2023 - this.birthYear)
 }

 const jonas = new Person('Jonas', 2000);
//  console.log(jonas)
//  jonas.calculateAge();
//  console.log(jonas.__proto__.__proto__)
// console.log(Person.prototype.constructor)
// const arr = new Array(1,2,36);
const arr = [1,2,3,3,4,3,1,5,3,8,2,6,3]
// console.log(arr.__proto__);

Array.prototype.unique = function(){
    return [... new Set(this)]
}
console.log(arr.unique())

// coding challenges
// CAR 1: 'BMW' going at 120 km/h
// CAR 2: Mercedes going at 95 km/h

const Car = function(name, speed){
   this.carName = name;
   this.speed = speed;
}
Car.prototype.accelerate = function(){
   this.speed = this.speed + 10;
   console.log(`accelerated ==> current speed is ${this.speed} km/h`);
}

Car.prototype.break = function(){
   this.speed = this.speed - 5;
   console.log(`break ==> current speed is ${this.speed} km/h`);
}
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate();
car1.break();
car1.break();
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();

car2.accelerate();
car2.break();
car2.break();
car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.accelerate();
