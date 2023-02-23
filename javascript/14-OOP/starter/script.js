'use strict';

//  const Person = function(firstName, birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//  } 
//  Person.prototype.calculateAge = function(){
//     console.log(2023 - this.birthYear)
//  }

//  const jonas = new Person('Jonas', 2000);
//  console.log(jonas)
//  jonas.calculateAge();
//  console.log(jonas.__proto__.__proto__)
// console.log(Person.prototype.constructor)
// // const arr = new Array(1,2,36);
// const arr = [1,2,3,3,4,3,1,5,3,8,2,6,3]
// console.log(arr.__proto__);

// Array.prototype.unique = function(){
//     return [... new Set(this)]
// }
// console.log(arr.unique())

// // coding challenges
// // CAR 1: 'BMW' going at 120 km/h
// // CAR 2: Mercedes going at 95 km/h

// const Car = function(name, speed){
//    this.carName = name;
//    this.speed = speed;
// }
// Car.prototype.accelerate = function(){
//    this.speed = this.speed + 10;
//    console.log(`accelerated ==> current speed is ${this.speed} km/h`);
// }

// Car.prototype.break = function(){
//    this.speed = this.speed - 5;
//    console.log(`break ==> current speed is ${this.speed} km/h`);
// }
// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// car1.accelerate();
// car1.break();
// car1.break();
// car1.accelerate();
// car1.accelerate();
// car1.accelerate();
// car1.accelerate();

// car2.accelerate();
// car2.break();
// car2.break();
// car2.accelerate();
// car2.accelerate();
// car2.accelerate();
// car2.accelerate();


//ES6 Class

// class PersonCl {
//    constructor(firstName, birthYear){
//       this.firstName = firstName;
//       this.birthYear = birthYear
//    }

//    calcAge(){
//       console.log(2023 - this.birthYear)
//    }

//    greet(){
//       console.log(`Hey ${this.firstName}`)
//    }
// }

// const jessica = new PersonCl('Jessica', 2000);
// jessica.calcAge();
// jessica.greet();

// const account = {
//    owner: 'Jonas',
//    movements: [200, 300, 400, 500, 600],
//    get latest(){
//       return this.movements.slice(-1).pop();
//    },
//    set latest(mov){
//       this.movements.push(mov);
//    } 
// }
// console.log(account.latest)
// account.latest = 700;
// console.log(account.movements)
// console.log(account.latest)

// class Account {
//    constructor(fullName, birthYear){
//       this.fullName = fullName;
//       this.birthYear = birthYear
//    }

//    get age(){
//       return 2023 - this.birthYear
//    }
// // validating name includes space (' ')
//    set fullName(name){
//       name.includes(' ')? this._fullName = name : alert("Invalid Name")
//    }

//    get fullName(){
//       return this._fullName
//    }
// }

// const user1= new Account('Jonas Don', 2000)
// console.log(user1.fullName)
// Inheritance between class using constructor function 

// Inheritance between classes and constructor function
const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge  = function() {
    console.log(2022 - this.birthYear)
};

const Student =  function(firstName, birthYear, course){
    Person.call(this, firstName, birthYear);
    this.course = course;
}

// Student.prototype = Object.create(Person.prototype)

Student.prototype.introduction = function(){
    console.log(`I am ${this.firstName} am studying ${this.course}`);
} 

const RankHolder = function(name, birthYear, course, rank){
    Student.call(this, name, birthYear, course);
    this.rank = rank;
}
// RankHolder.prototype = Object.create(Student.prototype)

const steave = new Student('steave', 2002, 'Computer science')
steave.introduction();
steave.calcAge();
console.log(steave)

const robin = new RankHolder('robin', 2004, 'Electronics engineer', 1)
robin.introduction();
robin.calcAge();
console.log(robin)