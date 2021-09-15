'use strict';

// closuer

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const inputString = `${this.question}\n${this.options.join(
      '\n'
    )}\n (Write option number)`;
    const input = Number(prompt(inputString));
    console.log(input);
    typeof input === 'number' &&
      input < this.answers.length &&
      this.answers[input]++;
    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll result ${this.answers.join(', ')}`);
    }
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
  */
/*3
const kingFisher = {
  airline: 'King Fisher',
  iataCode: 'KF',
  bookings: [],
  book(flightNum, pName) {
    console.log(
      `${pName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, pName });
  },
};

kingFisher.book(345, 'Abinesh');
kingFisher.book(526, 'Ranganathan');
//console.log(kingFisher.bookings);

const indianAirLine = {
  airline: 'Indian Air Line',
  iataCode: 'IAL',
  bookings: [],
};

const book = kingFisher.book;

book.call(indianAirLine, 23, 'Smith');
book.call(indianAirLine, 24, 'Jhon');
//console.log(indianAirLine);

const tnairline = {
  airline: 'Tamil Nadu Air Line',
  iataCode: 'TN',
  bookings: [],
};

const bookTN = book.bind(tnairline);
bookTN(543, 'Sanjay');

const bookIAL = book.bind(indianAirLine);
bookIAL(556, 'Tamizh');

const bookKF = book.bind(kingFisher);
bookKF(234, 'Abinesh');

const bookIAL345 = book.bind(indianAirLine, 345);
bookIAL345('Abinesh Ranganathan');

// with event listeners
indianAirLine.planes = 300;
indianAirLine.buyPlanes = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', indianAirLine.buyPlanes.bind(indianAirLine));

// partial application
const addTax = (rate, value) => {
  return value + value * rate;
};
console.log(addTax(0.2, 400));

const addVAT = addTax.bind(null, 0.1);
console.log(addVAT(200));

const addTax1 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const fFaddTax1 = addTax1(0.1);
console.log(fFaddTax1(200));
*/

/*const greet = function (greeting) {
  return function (names) {
    console.log(`${greeting} ${names}`);
  };
};

const greetAr = greeting => names => {
  console.log(`${greeting} ${names}`);
};

const greeterHey = greet('hey');
greeterHey('abi');

greetAr('hi')('abi');
*/

/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`original string ${str}`);
  console.log(`transformed ${fn(str)}`);
};

transformer('javascript is the best !', upperFirstWord);
*/
/*
const bookings = [];

const creatBooking = function (
  flightName = 'LS34',
  numberOfPassangers = 1,
  price = numberOfPassangers * 199
) {
  const booking = {
    flightName,
    numberOfPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
creatBooking('LS34');
creatBooking('FE45', 2);
*/
