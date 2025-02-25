let gamePoints = undefined;

console.log("------ Number Conversion ------");
console.log(typeof(gamePoints))
let pointsInNumber = Number(gamePoints)
console.log(typeof(pointsInNumber))
console.log(pointsInNumber);     

/* 
value       conversion        type 
"23"            23            number
"23abc"         NaN           string
null             0            object      
undefined       NaN           undefined
*/

console.log("------ Boolean Conversion ------");
let isUserLoggedIn = undefined;
console.log(typeof isUserLoggedIn);
let isUserLoggedInBoolValue = Boolean(isUserLoggedIn);
console.log(typeof isUserLoggedInBoolValue);
console.log(isUserLoggedInBoolValue);

/* 
value       conversion        type 
1             true            boolean
0             false           boolean
""             false           string      
"mohammed"     true            string
null           false           object
undefined      false           undefined
*/

console.log("------ String Conversion ------");

let someNumber = 99;

let someNumberString = String(someNumber);
console.log(someNumberString);
console.log(typeof someNumberString);




// ============================ OPERATIONS =================================

let fNumber = 1;
let sNumber = 2;

console.log("2"  + fNumber + sNumber); // 212
console.log("2"  + (fNumber + sNumber)); // 23
console.log( fNumber + sNumber  + "2"  ); // 32

let isValid = true;
console.log(isValid); // true
console.log(+isValid); // 1
console.log(++isValid); // 2
console.log(isValid++); // 2
console.log(+isValid++); // 3
