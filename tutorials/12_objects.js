/* 

Object declare via two ways - 
a.) Singleton => object via create by constructor then it will singleton object. [only one object]  
b.) Constructor => syntax: - Object.create()
c.) Literal => when we declare via literal then singleton not make!

*/


// Object Literals :-

const mySymbol = Symbol('myData');

const BeaconStudents = {
    name:"Abdul", // key : Value
    "full name": "Abdul Raheem",
    age:18,
    location:"Jaipur",
    email:"abdul1@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Friday"],
    [mySymbol]:"some data"
};

console.log(BeaconStudents.email)
console.log(BeaconStudents['email'])
console.log(BeaconStudents["full name"]); // if key contains spaces
console.log(BeaconStudents[mySymbol]); // to access symbol we use this syntax


BeaconStudents.email = "abdul7@yopmail.com";
// Object.freeze(BeaconStudents); // freeze the object, than after we can't change the value
BeaconStudents.email = "abdul7@outlook.com"; // not changes this value 
// console.log(BeaconStudents);


BeaconStudents.greeting = function(){
    console.log("Hello Beacon Students!!!");
}

BeaconStudents.greetingWithName = function(){
    console.log(`Hello ${this["full name"]}`);
}

console.log(BeaconStudents.greeting); // [Function (anonymous)]
console.log(BeaconStudents.greeting());
console.log(BeaconStudents.greetingWithName());