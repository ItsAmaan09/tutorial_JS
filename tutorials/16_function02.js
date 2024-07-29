
// ...name  , here ... is rest/spread operator.

function CalculatePrice(...amounts) {
    return amounts;
}

const totalPrice = CalculatePrice(200, 400, 500, 2000, 150, 50);
console.log(totalPrice);

const user = {
    name:'Mohammed',
    email:'amaan@outlook.com'
}

function getValueFromObject(anyObject){
    return `Your name is ${anyObject.name} and your email is ${anyObject.email}`;
}

console.log(getValueFromObject(user));

console.log(getValueFromObject({
    name:'Srk',
    email:'srk02@yopmail.com'
}));


const myNumberArray = [1,4,7,8];

function receivedArray(anyArray) {
    return anyArray;
}

console.log(receivedArray(myNumberArray));

console.log(receivedArray([4,7,9,5]));