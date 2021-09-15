'use strict';
/*
//scope
function calAge (birthYear){
    const age = 2021 - birthYear;
    console.log(firstName, age);

    function printAge (){
        console.log(`${firstName} was ${age} years old`);

        if(birthYear === 2000){
            var about = 'he was a good man';
        }
        console.log(about);
    }
    
    printAge();
}
const firstName = 'sterven';
calAge(2000);
*/

//this key word

 // var firstName = 'matilda';

const steven = {
    firstName: 'steven',
    year: '2000',
    calcAge: function(){
        console.log(this);
        console.log(2021-this.year);

        // solution 1 old -v
        /*const self =this;
        const isGood = function(){
            console.log(self.year >= 1995 && self.year <= 2005);
            //console.log(this.year >= 1995 && this.year <= 2005); // in this function call isGood(); 
            //it is regular function call , in regular function this keyword is undefind.
        */

        // solution 2 es6
        const isGood = () => {
            console.log(this);
            console.log(this.year >= 1995 && this.year <= 2005);


        }
        isGood();
    },

    // not use arrow function in object
    greet: () =>{
        console.log(`welcome ${this.firstName}`);
    }
};

steven.calcAge();
steven.greet();

const add = function(a,b){
    console.log(arguments);
    return a+b;
}
add(2,3,4,4,4,4,4,4,4,);

const addArro = (a,b) => {
    //console.log(arguments); argument key word is not exist in arrow function
    return a+b;
}
addArro(2,3);