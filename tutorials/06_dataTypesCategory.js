// Primitive

// 7 types: String, Number, Boolean, Undefined, Null, BigInt, Symbol.

const score = 100;
const avg = 43.5;
const isLogin = false;
const id = Symbol('123');
const id2 = Symbol('123');
console.log(id === id2); // false
const bNumber = 4894754213213212315456n;


// Reference type : non primitive

const movies = ['ironman', 'spiderman', 'superman'];
let obj = {
    name:'spiderman',
    actor:'peter parker',
    age:45
}

const myFunction = function nameOfFunction(params) { // function object
    console.log('This is my function');
}

console.log(typeof myFunction);
console.log(typeof movies);
console.log(typeof obj);

// Memory management :-
/* 
    Stack:- (primitive)   heap:- (non-primitive)
*/

let myFirstName = "Mohammed";

console.log(myFirstName);
let myLastName = myFirstName;
myLastName = "Amaan"
console.log(myLastName);
console.log(myFirstName);

let user1 = {
    name:'virat',
    email:'v@yopmail'
}


console.log(user1);
let user2 = user1;

user2.name = 'kohli';

console.log(user1);
console.log(user2);