const name = "Amaan";
const count = 50;

// console.log(name + count + "something");

console.log(`Hello my name is ${name} and my count is ${count}`); // string interpolation

const gameName = new String("Tekkan 3");

console.log(gameName[0]); // string object 
console.log(gameName.__proto__); // string object 
console.log(gameName.length); // string object 
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));

const substringGameName = gameName.substring(0,6); // start not allow negative
console.log(substringGameName);

const sliceGameName = gameName.slice(0,6); // start allow negative
console.log(sliceGameName);

const inputFieldValue = "      some string        ";
console.log(inputFieldValue);

const inputFieldValueWithTrim = inputFieldValue.trim(); // remove white spaces 
console.log(inputFieldValueWithTrim);


const url = 'https://mohammed.com/mohammed%09amaan';
console.log(url.replace('%09','-'));

console.log(url.includes('mohammed')); // true

console.log(gameName.split(' '));