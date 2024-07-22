// const beaconStd = new Object(); // this is a singleton object 
const beaconStd = {};  // non singleton


beaconStd.id = "01bcn"
beaconStd.name = "Peter"
beaconStd.isLoggedIn = true
// console.log(beaconStd);

const fbUser = {
    email:'peter@yopmail.com',
    fullname:{
        userFullName:{
            firstName:'peter',
            lastName:'parker'
        }
    }
}


// console.log(fbUser.fullname.userFullName.firstName); // peter

// combine object 

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2};

const objMergeByAssign = Object.assign(obj1,obj2);  // target,source
const objByAssignNew = Object.assign({},obj1,obj2)
// console.log(obj3);
// console.log(obj1);


// object create via spread operator as like as discussed in arrays:
const obj3 = {...obj1,...obj2};
// console.log(obj3);
// console.log(obj1);

const students= [
    {
        id:1,
        email:'p@yopmail.com'
    },
    {
        id:1,
        email:'p@yopmail.com'
    },
    {
        id:1,
        email:'p@yopmail.com'
    }
];

console.log(students[1].email);


console.log(beaconStd);

console.log(Object.keys(beaconStd)); // type arrays
console.log(Object.values(beaconStd)); // type arrays
console.log(Object.entries(beaconStd)); // array into array key : val

console.log(beaconStd.hasOwnProperty('isLoggedIn')); // true