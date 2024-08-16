// if (true) { // below code executed

// }
// if(false){ // below code !executed

// }
console.log("Global code"); // outside of a control , always executed....

const isUserLoggedIn = true;

if (isUserLoggedIn) {
    const username = 'peter'
    console.log(`You have successfully logged in :  ${username}`);
}
// console.log(username); // user is not defined if you declare variable into block 
// console.log(username); // peter ,,,,, because if you use var keyword into block   **********

const isDebitCard = true;
const isMicrosoftLogin = true;
const isGoogleLogin = true;
const isFacebookLogin = false;
const isGmailLogin = false;


if (isMicrosoftLogin && isDebitCard) {
    console.log('You are allowed to ordered online');
} else {
    console.log('You are not allowed to ordered online');
}

if (isGmailLogin || isFacebookLogin) {
    console.log("you have login success");
}

// conditional operator : < , > , <= , >= , == , != , === , !===
const accountBalance = 1000;

// nested if statements :-
if (accountBalance < 200) {
    console.log("Balance is less than 200");
} else if (accountBalance < 500) {
    console.log("Balance is less than 500");
}
else if (accountBalance < 800) {
    console.log("Balance is less than 800");
}
else {
    console.log("Balance is less than 1500");
}


//  switch statements :- 

const monthNumber = 3;
const monthName = "March";
// syntax :-

/* switch (key) {
    case value:
        break;
    case value:
        break;
    case n....
    default:
        break;
}
*/

switch (monthNumber) {
    case 1:  // case "January" :
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    default:
        console.log('not on this condition');
        break;
}


const myName = "Mohammed" // true return
const myEmail = ""; // false return 
const userList = [];
const userData = {};

if (myName) {
    console.log("executed");
}

if(myEmail){
    console.log("not executed");
}

//  falsy value : -
// "" , 0 , false , -0 , BigInt 0n , null, undefined, NaN


//  truthy value : -
// "0", 'false',  " ", [], {}, function(){}

//  to check if array empty or not:-

const heroes = [];

if (heroes.length === 0) {
    console.log("array is blank");
}

//  to check if obj is empty :=

const userDataObj = {};

if(Object.keys(userDataObj).length === 0) {
    console.log("Object is blank");
}

//  if your if statement has only one line of code :-
// if (5 > 2) console.log("executed"), console.log();
if (5 > 2) console.log("executed");


//  nullish coalescing operator [ ?? ] :- null , undefined

let score;
score = 50 ?? 100;
score = null ?? 80;
score = undefined ?? 80;
score = 30 ?? 40 ?? 50;
console.log(score);


//  turnery operator  [ ? ] 

(5 > 2) ? true : false;