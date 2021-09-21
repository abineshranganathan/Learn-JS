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
