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