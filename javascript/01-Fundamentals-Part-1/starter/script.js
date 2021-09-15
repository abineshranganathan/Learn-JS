/*
//Coding Challeng #1
const markHight = 78;
const markWeight = 1.69;

const johnHight = 92;
const j0hnWight = 1.95;

const bmiOfMark =  markWeight / markHight ** 2 ;
const bmiOfJohn = j0hnWight / (johnHight * johnHight);

console.log(bmiOfMark , bmiOfJohn);

markHigherBMI = bmiOfMark > bmiOfJohn;
console.log(markHigherBMI);

const firstName = 'Abinesh';
const age = 20;
const job = 'student';
console.log("i'am"+" "+firstName+" "+",a"+" "+age+" years old "+job+'!');
console.log(`I'am ${firstName}, a ${age} years old ${job} !`); 106*/


/*const dolphine = (97+112+100)/3;
const koalas = (109+95+106)/3;
console.log(dolphine, koalas);


if(dolphine > koalas && dolphine >= 100){
    console.log("Dolphine won trophy ");
}else if(koalas > dolphine  && koalas >= 100){
    console.log("Koalas won trophy");
}else if(dolphine === koalas && dolphine >= 100 && koalas >= 100){
    console.log("both team won");
}else{
    console.log("none of the team win");
}*/
const billValues1 = 40;
const tip1 = billValues1 >=50 && billValues1 <= 300 ? 
console.log(`the bill was ${billValues1} the tip was ${0.15*billValues1} and the total value is ${billValues1 + (0.15*billValues1)}`): 
console.log(`the bill was ${billValues1} the tip was ${0.2*billValues1} and the total value is ${billValues1 + (0.2*billValues1)}`);

const billValues = 40;
const tip = billValues >=50 && billValues <= 300  ? billValues *0.15 : billValues * 0.2; 
console.log(`the bill was ${billValues} the tip was ${tip} and the total value is ${billValues + tip}`); 
