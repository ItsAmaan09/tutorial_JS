// Arrays :

const users = ['virat', 'rohit', 'jadeja'];
const userAge = [23, 25, 24, 27, 12, 18];
const myNumber = new Array(11, 12, 13, 14, 15);

// console.log(myNumber);

// Array methods :-
myNumber.push(16);  // add element to the last
console.log(myNumber);
myNumber.pop(); // remove element from the last
console.log(myNumber);

myNumber.unshift(10); // add element to the start
console.log(myNumber);
myNumber.shift();  // remove element from the start
console.log(myNumber);

console.log(myNumber.includes(9)); // boolean wise
console.log(myNumber.indexOf(9));  // -1 if not found , else give index

const newNumber = myNumber.join();
console.log(myNumber); // type object 
console.log(newNumber); // type string because we join it

console.log("Slice vs Splice"); //// splice modified the array , while slice not!
const originalArray = [1, 2, 3, 4, 5, 6];
console.log(`Original array :  ${originalArray}`);

console.log(`Slice : ${originalArray.slice(1,4)}`);

console.log(`Original array :  ${originalArray}`);

console.log(`Splice : ${originalArray.splice(1,4)}`);

console.log(`Original array : ${originalArray}`);
