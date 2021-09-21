// 'use strict';
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours,

//   order: function (itemOne, itemTwo) {
//     return [this.starterMenu[itemOne], this.mainMenu[itemTwo]];
//   },

//   orderDeliver: function ({
//     time = '08:00',
//     address,
//     productOne = 1,
//     productTwo,
//   }) {
//     console.log(
//       `Order recived! ${this.starterMenu[productOne]} and ${this.mainMenu[productTwo]} will be deliver to ${address} at ${time} thank you !`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
//     );
//   },

//   orderPizza: function (mainIngredient, ...otherIngredient) {
//     console.log(mainIngredient, otherIngredient);
//   },
// };

// //////////////////////////////////////////////
// // working with String 1
// /*
// const airline = 'TAP Air India';
// const plane = 'A230';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);

// console.log(airline.length);
// console.log('A419'.slice(-2));

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('i'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf('India')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// // EXAMPLE
// const checkMiddelSet = function (seat) {
//   // B & E are the middal sets
//   const findMid = seat.slice('-1');
//   if (findMid === 'B' || findMid === 'E') {
//     console.log(`${seat} is a middle seat`);
//   } else {
//     console.log(`${seat} is not a middle seat`);
//   }
// };
// checkMiddelSet('11B');
// checkMiddelSet('23C');
// checkMiddelSet('34E');
// */
// //////////////////////////////////////////////

// //working with string 2
// /*
// const pName = 'aBINesh';
// console.log(pName.toUpperCase());
// console.log(pName.toLowerCase());

// const passengerName = 'sMIth';
// const pLowerCase = passengerName.toLowerCase();
// const pCorrect = pLowerCase[0].toUpperCase() + pLowerCase.slice(1);
// console.log(pCorrect);

// // comparing Email

// const email = 'hello@js.com';
// const loginId = ' HEllo@js.com';

// const crtEmail = loginId.toLowerCase().trim();
// console.log(crtEmail);

// //replacing
// const priceINR = '2588,32₹';
// const priceUSD = priceINR.replace(',', '.').replace('₹', '$');
// console.log(priceUSD);

// const announcement =
//   'All pasangers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// const planeName = 'Airbus A324neo';
// console.log(planeName.includes('A324'));
// console.log(planeName.startsWith('Air'));

// if (planeName.startsWith('Airbus') && planeName.endsWith('neo')) {
//   console.log(`${planeName} is form Airbus family`);
// } else {
//   console.log(`${planeName} is not form Airbus family`);
// }

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('you are not allowed on board');
//   } else {
//     console.log('Wellcome aboard !');
//   }
// };

// checkBaggage('I have a lapot ,some food and a pocket Knife');
// checkBaggage('I have a socks ,snacks and a camera');
// checkBaggage('I have a food and a gun for prodiction');
// */
// //////////////////////////////////////////////

// // working with string 3

// const nameSplit = 'hi-am-abinesh';
// console.log(nameSplit.split('-'));

// const nameSplit1 = 'Abinesh Ranganathan';
// const [firstName, lastName] = nameSplit1.split(' ');

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const nameCrt = [];

//   for (const n of names) {
//     //nameCrt.push(n[0].toUpperCase() + n.slice(1));
//     nameCrt.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(nameCrt.join(' '));
// };

// capitalizeName('jessica ann adam smith');
// capitalizeName('abinesh ranganathan');

// const addS = ['abinesh', 'ranganathan'];
// console.log(addS.join(' '));

// const mask = '1234567890';
// console.log(mask.padStart(1, '*').padEnd(23, '$'));

// // mask numer $$$$$$$$$$$$$
// const maskCreditCard = function (number) {
//   const str = String(number);
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };
// console.log(maskCreditCard('3456785463'));
// console.log(maskCreditCard('8567896356756776'));
// console.log(maskCreditCard('3456785464545346547'));

// //////////////////////////////////////////////

// // Coding Challenge #4

// /*
// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

// GOOD LUCK 😀
// */

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const proceed = function () {
//   const text = document.querySelector('textarea').value;
//   const splited = text.split('\n');
//   for (const [i, trim] of splited.entries()) {
//     const [first, second] = trim.trim().toLowerCase().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// };

// document.querySelector('button').addEventListener('click', proceed);

// //////////////////////////////////////////////

// // set
// /*
// const orderSet = new Set(['biriyani', 'fried rise', 'fried rise', 'parotta','biriyani','biriyani'])
// console.log(orderSet);
// console.log(new Set('Abinesh'));
// console.log(orderSet.has('chicken 65'));
// console.log(orderSet.has('biriyani'));
// orderSet.add('chicken 65');
// orderSet.delete('fried rise')
// console.log(orderSet)
// */
// ///////////////////////////////////////////////

// // map
// /*
// const rest = new Map();
// rest.set('name', 'thalapa katti');
// rest.set(1,'chennai');
// rest.set(2,'kanchipuram');
// console.log(rest.set(2,'kanchipuram'));

// rest.set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] )
// .set('open', 11).set('close',23).set(true,'we open :)').set(false , 'we closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 21;
// const now = rest.get(time > rest.get('open') && time < rest.get('close'));
// console.log(now)
// */
// //////////////////////////////////////////////

// /*const question = new Map([
//   ['question', 'what is the best programming language in the world ?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'correct'],
//   [false, 'try again'],
// ]);
// console.log(question);

// // convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // quiz
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key} : ${value}`);
//   }
// }
// const answer = Number(prompt('choose a number'));
// console.log(question.get(answer === question.get('correct')));
// */
// /////////////////////////////////////////////

// ///////////////////////////////////////////////
// // check down to up

// ///////////////////////////////////////////////

// // optional changing (?.)
// /*

// const days = ['mon', 'tue', 'wed','thu','fri','sat','sun']
// for (const day of days){
//   //console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'close';
//   //console.log(`On ${day}, we open at ${open}`);
// }

// // optional changing (?.) with method

// //console.log(...restaurant.order?.(0,1) ?? "dose not exixt")

// */

// ///////////////////////////////////////////////

// // Coding Challenge #3

// /*
// Let's continue with our football betting app! This time, we have a map
// with a log of the events that happened during the game. The values are
// the events themselves, and the keys are the minutes in which each event
// happened (a football game has 90 minutes plus some extra time).

// 1. Create an array 'events' of the different game events that happened
// (no duplicates)
// 2. After the game has finished, is was found that the yellow card from
// minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether
// it's in the first half or second half (after 45 min) of the game, like
// this:
//       [FIRST HALF] 17: ⚽️ GOAL

// GOOD LUCK 😀
// */
// /*
// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// for (const [key, value] of gameEvents) {
//   const half = key < 45 ? 'FIEST HALF' : 'SECOND HALF';
//   console.log(`[${half}] ${key}: ${value}`);
// }
// */
// //////////////////////////////////////////////

// // Coding Challenge #2

// /*
// Let's continue with our football betting app!

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

// GOOD LUCK 😀
// */
// /*
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// for (const [goal,name] of game.scored.entries()){
//   console.log(`Goal ${goal+1}: ${name}`);
// }
// const odds = Object.values(game.odds)
// let average = 0;
// for (const odd of odds)
//   average += odd;
//   average /= odds.length;
//   console.log(average);

// */
// ///////////////////////////////////////////////

// /*
// Coding Challenge #1
// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
// GOOD LUCK ! */

// //Coding Challenge #1
// /*
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//   [
//   'Neuer',
//   'Pavard',
//   'Martinez',
//   'Alaba',
//   'Davies',
//   'Kimmich',
//   'Goretzka',
//   'Coman',
//   'Muller',
//   'Gnarby',
//   'Lewandowski',
//   ],
//   [
//   'Burki',
//   'Schulz',
//   'Hummels',
//   'Akanji',
//   'Hakimi',
//   'Weigl',
//   'Witsel',
//   'Hazard',
//   'Brandt',
//   'Sancho',
//   'Gotze',
//   ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//   'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//   team1: 1.33,
//   x: 3.25,
//   team2: 6.5,
//   },

// };

// const[players1,players2]=game.players;
// console.log(players1,players2);

// const [gk,...fieldPlayers] = players1;
// console.log(gk,fieldPlayers);

// const allPlayers = [...players1,...players2];
// console.log(allPlayers);

// const players1Final = [...players1,'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// //const {team1:team1, x:draw, team2:team2} = game.odds;
// //console.log(team1,draw,team2);
// const {
//   odds:{
//       team1:team1,
//       x: draw,
//       team2: team2
//   }
// } = game;
// console.log(team1,draw,team2);

// const printGoals = function(...players){
//   let playersList = '';
//   for(let i = 0; i < players.length; i++){
//       playersList += players[i];

//   }
//   console.log(`${playersList}`);
//   console.log(`${players.length} goles were scored`);

// }
// //printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// // low odd wins
// team1 < team2 && console.log(`team 1 is mosty lick to win`);
// team1 > team2 && console.log(`team 2 is mosty lick to win`);
// */

// ///////////////////////////////////////////////

// ///////////////////////////////////////////////

// /*
// // Rest Patten and Parameters
// // use ... on left side

// // use case (1) Destructing

// const arr = [1,2,3,4,5,6];
// const [a,b,...c] = arr;
// console.log(a,b,c); // ===> 1 2 (4) [3, 4, 5, 6]

// // real world example
//  const [elOne, ,elTwo,...elThree] = [...restaurant.mainMenu,...restaurant.starterMenu];
//  console.log(elOne,elTwo,elThree);

//  // REST PATTEN IN ODJECTS
// const {sat: weakEnd,...weakDays} = restaurant.openingHours;
// console.log(weakDays);

// // use case(2) Functions   used to pass muti argument to the function all at the same time

//  const add = function (...numder){
//    let sum = 0;
//    for (let i = 0; i < numder.length; i++){
//      sum = sum+numder[i];
//    }
//    console.log(sum);
//  };
//  add(1,2);
//  add(1,2,3);
//  add(1,2,3,4,);
//  const x = [23,44,66];
//  add(...x);

//  // real word example
//  const ings = ['mushroom','chicken','onion','spinach']
//  restaurant.orderPizza(...ings);
// */

// ////////////////////////////////////////////////

// ///////////////////////////////////////////////
// /*
// //the Spread operator(...)

// const arr = [1,2,3,4,5];
// const badArr = [arr[0],arr[1],arr[2],arr[3],arr[4],6,7];
// console.log(badArr);

// // es6

// const newArr = [11,12,13,14,15];
// const goodArr = [...newArr,16,17,18];
// console.log(goodArr); // ===> (8) [11, 12, 13, 14, 15, 16, 17, 18]
// console.log(...goodArr); // ===> 11 12 13 14 15 16 17 18

// const newMenu = [...restaurant.mainMenu,'Noddels','Shavarma'];
// console.log(...newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];

// const menu = [...restaurant.starterMenu,...mainMenuCopy];
// console.log(menu);

// // order pasta real example
// const ingredient = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Ingerdient 2?`),
//   prompt(`Ingerdient 3?`)
// ];
// restaurant.orderPasta(...ingredient); // sepreat operator used

// /////////////////////////////////////////////////
// */

// /*
// // destructing object
// restaurant.orderDeliver({
//   time: '03:30 pm',
//   address: 'No 41, orikkai, kpm',
//   productOne: 3,
//   productTwo: 0

// });

// restaurant.orderDeliver({
//   address: 'No 41, orikkai, kpm',
//   productTwo: 0

// });

// const { fri:{open: o, close: c},} = restaurant.openingHours;
// console.log(o,c);

// const { name, openingHours ,categories} = restaurant;
// console.log(name, openingHours, categories);

// const { name: restaurantName, openingHours: opening } = restaurant;
// console.log(restaurantName,opening);

// const { name : shope = [], menu: item = [] ,location: list = []} = restaurant;
// console.log(shope,item,list);

// // mutation in object

// let x = 33;
// let y = 34;
// const mut = {x: 22, y: 11, z:29292 };
// ({x,y} = mut);
// console.log(x,y);

// // destructing Object
// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);

// const [x, y, z] = arr;
// console.log(x, y, z);

// const [first, , second] = restaurant.categories;
// console.log(first, second);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary); //Italian Vegetarian

// //change  Vegetarian main and Italian secondary

// // method 1
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); //Vegetarian Italian

// //method 2
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [itemFirst, itemSecond] = restaurant.order(0, 1);
// console.log(itemFirst, itemSecond);

// const nested = [1, 2, [3, 4]];
// const [, , [b, e]] = nested;
// console.log(a, b, e);
// */

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ staterIndex, mainIndex, address, time }) {
    console.log(
      `Order received! ${this.starterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPastha: function (ing1, ing2, ing3) {
    console.log(`your pasta is reat with ${ing1}, ${ing2} and ${ing3}`);
  },
};
// Spread Operator(...)

// use case 1 => creat a shalo copy of array
const newStaterMenu = [...restaurant.starterMenu];
console.log(newStaterMenu);

// use case 2 => creat meargea two array into one array
const mainMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(mainMenu);

// // spread operator with example
// const ingredient = [prompt('ing1'), prompt('ing2'), prompt('ing3')];
// console.log(ingredient);
// restaurant.orderPastha(...ingredient);

// spread Operator with object
const resaturantCopy = { ...restaurant, foundedYear: 2000, founder: 'Abinesh' };
console.log(resaturantCopy);

const resaturantCopy2 = { ...restaurant };
resaturantCopy2.name = 'Abinesh Resturaunt';
console.log(resaturantCopy2.name);
console.log(restaurant.name);
// // Destructuring object
// const { name, categories, openingHours } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: types,
// } = restaurant;
// console.log(restaurantName, hours, types);

// // Default value
// const { menu: items = [], starterMenu: stater = [] } = restaurant;
// console.log(items, stater);

// // Mutating variables
// let a = 33;
// let b = 55;
// const obj = { a: 3, b: 4, c: 5 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested object
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// //  realworld example for desturing objects

// restaurant.orderDelivery({
//   time: '2:00',
//   address: 'no 44, Abcd street, thisState , thisCountry',
//   staterIndex: 2,
//   mainIndex: 0,
// });
//
//
//
//
//
// // Destructure array
// let [one, two] = restaurant.categories;
// // console.log(one, two); // Italian Pizzeria

// // swap array
// [one, two] = [two, one];
// // console.log(one, two); // Pizzeria Italian

// const [starterMenu, mainMenu] = restaurant.order(0, 1);
// console.log(starterMenu, mainMenu); // Focaccia Pasta

// //  Nested Desturcturing
// const nestedArr = [1, 2, 3, [4, 5, 6]];
// const [a, b, c, [d, e, f]] = nestedArr;
// console.log(a, b, c, d, e, f);

// // default value in Desturing
// const [i = 0, j, k = 0] = [1, 2];
// console.log(i, j, k);
