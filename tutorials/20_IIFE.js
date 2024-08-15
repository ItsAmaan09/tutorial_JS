//  Immediately invoked function expressions

// to get rid for a problem of polution of a global scope , we used IIFE 

/* normal function execution 
function printName() {
    console.log("Hello peter");
}


printName();
*/

// below syntax to write IIFE : called as Named IIFE
(function printName() {
    console.log("Hello this is IIFE");
})();

// below syntax to write arrow IIFE
( ()=>{
    console.log("Hello this is arrow IIFE ")
} )();

// parameterised syntax to write arrow IIFE
((name)=>{
    console.log(`Hello ${name} , welcome to my JS course`);    
})('Peter');