// jan 1 , 1970  the date will calculate

let myDate = new Date();
console.log(typeof myDate); // Object
console.log(myDate); //2024-07-11T05:58:57.819Z
console.log(myDate.toString()); // Thu Jul 11 2024 05:59:25 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Thu Jul 11 2024
console.log(myDate.toLocaleString()); // 7/11/2024, 6:00:25 AM
console.log(myDate.toLocaleDateString()); // 7/11/2024

let createdDate = new Date(2023,0,23);  // yyyy,m,dd  month start with 0 in js
let createdDateWithTime = new Date(2024,0,23,14,45);  // yyyy,m,dd  month start with 0 in js

console.log(createdDate.toDateString()); // Mon Jan 23 2023
console.log(createdDateWithTime.toLocaleString()); // 1/23/2024, 2:45:00 PM

// let dateInString = new Date("2023-00-14");
let dateInString = new Date("2023-01-14");
console.log(dateInString); // Invalid date because month not 00
console.log(dateInString.toLocaleString()); // 1/14/2023, 12:00:00 AM


let myTimeStamp = Date.now();

console.log(myTimeStamp); /// millisecond value since  jan 1 , 1970
console.log(dateInString.getTime());


let newDate = new Date();

console.log((newDate.toLocaleString('default',{
    weekday:'short',
    day:'numeric',
    month:'short'
})));