/*function fruitProcess(apple , orange){
    const juice = `juice with ${apple} apple and ${orange} orange`;
    return juice;
}
const newJuice = fruitProcess(2,3);
console.log(newJuice);*/

// find retairment age using arrow function

/*const toRetairment = birthYear => {
    const age = 2021 - birthYear;
    const retairment = 65 - age;
    return retairment;
}
const  ageToRetairment = toRetairment(2000);
console.log(ageToRetairment);*/

// Coding Challenge 1

/*const calcAverage = (a,b,c) => (a+b+c)/3;

function checkWinner (avgDolphins, avgKoalas){
    if(avgDolphins >= avgKoalas*2){
        console.log(`dolphins win (${dolphins} vs ${koalas})`)
    }else if(avgKoalas >= avgDolphins*2){
        console.log(`koalas win (${koalas} vs ${dolphins})`)
    }else{
        console.log(`no team wins`)
    }
}

let dolphins = calcAverage(44,23,71);
let koalas = calcAverage(65,54,49);
checkWinner(dolphins,koalas);

dolphins = calcAverage(85,54,41);
koalas = calcAverage(23,34,27);
checkWinner(dolphins,koalas);*/

// Coding Challenge 2

/*const calaTip = function (bill){
  return  bill >= 50 && bill <= 300 ? bill*0.15 :bill * 0.2;

}
const bills = [125,555,44];
const tips = [calaTip(bills[0]),calaTip(bills[1]),calaTip(bills[2]) ]
const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log(bills , tips, total);*/

/*const jonas = {
    firstName : 'jonas',
    lastName : 'mick',
    birthYear : 2000,
    jod : 'student',
    friends : ['Jhon', 'thommy', 'larance' ],
    hadDrivingLicense : false,


    getStatement: function(){
        this.sent =`${this.firstName} is a ${this.age}-years old ${this.job} and he has ${this.hadDrivingLicense ? 'a':'no'} driving licence`
        return this.sent;
    },
    
    calcAge : function (){
        this.age = 2021-this.birthYear;
        return this.age;
    },

    
}
console.log(jonas.getStatement());
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.sent);*/

// Coding Challenge 3

/*const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI : function(){
        this.bmi = this.mass / this.height **2
        return this.bmi;
    } 
    
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,    
    calcBMI : function(){
        this.bmi = this.mass / this.height **2
        return this.bmi;
    } 
    
}

const markBIM = mark.calcBMI();
const johnBIM = john.calcBMI()

if(markBIM > johnBIM){
    console.log(`${mark.firstName} ${mark.lastName} BIM (${markBIM}) is higher than ${john.firstName} ${john.lastName}(${johnBIM}) !`);
}else{
    console.log(`${john.firstName} ${john.lastName} BIM (${johnBIM}) is higher than ${mark.firstName} ${mark.lastName}(${markBIM}) !`);
}*/

/*const Jd = [
    'Jhon',
    'Dhurai Raj',
    2021-1982,
    'teacher',
    ['vjs','ad','kappis']

];
for(let i = 0; i<Jd.length; i++){
    if(typeof Jd[i] !== 'string') continue;
    console.log(Jd[i], typeof Jd[i] );
}

for(let i = 0; i<Jd.length; i++){
    if(typeof Jd[i] === 'number') break;
    console.log(Jd[i], typeof Jd[i] );
}*/

/*const address = [
    41,
    'chinna swamy nager',
    'orikkai',
    'kanchipuram',
];
 
const addAddress = [];
for(let i = 0; i < address.length; i++){
    console.log(`${address[i]}`);
    addAddress.push(address[i]);
}
console.log(addAddress)*/

// backward looping

/*const address = [
    41,
    'chinna swamy nager',
    'orikkai',
    'kanchipuram',
];
for (let i=address.length-1; i>=0; i--){
    console.log(`${address[i]}`);
}*/

// coding challenge 4

const calaTip = function (bill){
    return  bill >= 50 && bill <= 300 ? bill*0.15 :bill * 0.2;
  
  }

  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52 ]
  const tips =[];
  const totals=[];

  for(let i = 0; i<bills.length; i++){
      const tip = calaTip(bills[i]);
      console.log(tip);
      tips.push(tip);
      totals.push(tip+bills[i]);
      
  }
  console.log(tips);
  console.log(totals);

  const calaAverage = function(arr){
      let sum = 0;
      for(let i = 0; i<arr.length; i++){
          sum = sum + arr[i];
      }
      return sum/arr.length;
  }

console.log(calaAverage(totals));