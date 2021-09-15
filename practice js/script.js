// Bubblimg and Capturing and spot propagation
/*
document.querySelector("#grandparent").addEventListener("click", function(){
    console.log("grand parent")
}, true);
document.querySelector("#parent").addEventListener("click", function(e){
    console.log("parent")
    e.stopPropagation()
}, true);
document.querySelector("#child").addEventListener("click", function(){
    console.log("child");
}, true);
*/

// Event Delegation

// document.getElementById("categories").addEventListener("click", (e) => {
//   console.log(e.target);
//   window.location.href = `${e.target.id}`;
// });

"use strict";
console.log(this);
function calcAge(birthYear) {
  console.log(2021 - birthYear);
  console.log(this); // this key word is undefined in stict mode
}
calcAge(2000);

const calcAgeArr = (birthYear) => {
  console.log(2021 - birthYear);
  console.log(this);
};
calcAgeArr(2001);

const jonas = {
  year: 2002,
  calcAge: function () {
    console.log(2021 - this.year); // take a owner of the function which use this key word
  },
};
jonas.calcAge();

const matilda = {
  year: 2005,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();
