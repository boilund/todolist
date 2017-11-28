// Data types

// Strings 多くの会社がこちらを使う
let greeting = 'Hello there!';
console.log(greeting);

// Strings, version 2
let bye = "Bye for now!";
console.log(bye);

// We can add strings together(concatenation - 'klistra ihop')
let allIHaveToSay = greeting + ' ' + bye;
console.log(allIHaveToSay);


// Numbers
// (can be both integers and decimal numbers)
let numberOfBeersBar1 = 5;
let numberOfBeersBar2 = 1;
let totalNumberOfBeers = numberOfBeersBar1 + numberOfBeersBar2;
console.log(totalNumberOfBeers);


// Booleans
let thirsty = true;
let hungry = false;

// && = and (logical operator)
let thirstyAndHungry = thirsty && hungry;

// || = or (logical operator)
let thirstyOrHungry = thirsty || hungry;

console.log('thirsty', thirsty);
console.log('hungry', hungry);
console.log('thirstyAndHungry', thirstyAndHungry);
console.log('thirstyOrHungry', thirstyOrHungry);


let savedMoney = 4000;
let debts = 4000;
// Comparing two values using one og these operators >, <, >=, <=, ==, !=
// always returns a boolean
let happy = savedMoney > debts;
let equalMoneyAndDebts = savedMoney == debts;
console.log('happy', happy);
console.log('equalMoneyAndDebts', equalMoneyAndDebts);