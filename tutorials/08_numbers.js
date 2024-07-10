let gamePoint = 100;

console.log(gamePoint);

let gamePoint2 = new Number(45); // must be a number
// let gamePoint2NotaNumber = new Number('45af'); //NaN
console.log(gamePoint2.toFixed(2)); // 45.00
console.log(gamePoint2.toString()); // 45
let avgPoints = new Number(78.5874);
console.log(avgPoints.toFixed(2)); // 78.59
console.log(avgPoints.toFixed(1)); // 78.6
console.log(avgPoints.toFixed(3)); // 78.587
console.log(avgPoints.toPrecision(2)); // 79
console.log(avgPoints.toPrecision(3)); // 78.6
console.log(avgPoints.toPrecision(4)); // 78.59
console.log(avgPoints.toPrecision(5)); // 78.587

let balance = new Number(2378.5874);
console.log(balance.toPrecision(5)); // 2378.6
console.log(balance.toPrecision(4)); // 2379

let accountBalance = new Number(1000000);
console.log(accountBalance.toLocaleString()); // 1,000,000
console.log(accountBalance.toLocaleString('en-IN')); // 10,00,000

// Maths Calculations:-

console.log(Math); // Object [Math] {}
console.table(
    [
        Math.abs(-4),   // 4
        Math.round(4.5), // 5
        Math.ceil(4.2),  // 5
        Math.floor(4.9),  // 4
        Math.sqrt(16),  // 4
        Math.min(2,5,7,1,8), // 1
        Math.max(2,5,7,1,8) // 8 
    ]
);

const randomVal = Math.random(); // return a number bw 0 and 1
const randomVal2 = Math.random() * 10; // here number can be 0.041 , so next 
const randomVal3 = (Math.random() * 10) + 1; // number 1 to 10
const randomValFloor = Math.floor((Math.random() * 10) + 1); // number 1 to 10
console.table(
    [randomVal,randomVal2,randomVal3,randomValFloor]
)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min );