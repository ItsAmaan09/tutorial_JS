const india_Stars = ["Virat","Rohit","Bumrah"];
const australia_Stars = ["Smith","Maxwell","Cummins"];

// india_Stars.push(australia_Stars);
// console.log(india_Stars);
// console.log(india_Stars[3][1]); // not recommanded

const all_Stars = india_Stars.concat(australia_Stars);
console.log(all_Stars); // return a new array
console.log(india_Stars); // same as previous 
/*
** Note : - Push operation push into an existing array while 
            Concat return a new array
*/

// Spread operator :- A glass of tumbler , drop => the glass will spread


const all_StarsWithSpread = [...india_Stars,...australia_Stars];
console.log(all_StarsWithSpread); 

const arrayNew = [1,2,3,[4,5,6],7 ,[6,7,[4,5]]];

//Returns a new array with all sub-array elements concatenated into it recursively 
//up to the specified depth.
const arrayNewFlat = arrayNew.flat(1);
console.log(arrayNewFlat);


console.log(Array.isArray("AmAaN"));  // false
console.log(Array.from("AmAaN")); // ['A','m','A','a','N'] ;
console.log(Array.from({name: "AmAaN"}));  // []


let point = 100;
let point2 = 200;
let point3 = 300;

// Returns a new array from a set of elements.
console.log(Array.of(point,point2,point3)); // [ 100, 200, 300 ]

