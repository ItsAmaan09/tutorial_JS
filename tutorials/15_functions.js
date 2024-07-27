// console.log('A');
// console.log('M');
// console.log('A');
// console.log('A');
// console.log('N');

function printMyName() {
    console.log('A');
    console.log('M');
    console.log('A');
    console.log('A');
    console.log('N');
}

printMyName();
printMyName();

function addTwoNumber(number1, number2) {
    const result = number1 + number2;
    console.log(result)
}

// addTwoNumber(5,8);
// addTwoNumber(5,'8');
// addTwoNumber(5,'f');
// const result = addTwoNumber(4,8);
// console.log(result);

function addTwoNumberWithReturn(number1, number2) {
    const result = number1 + number2;
    return result
}
const result = addTwoNumberWithReturn(4,8)
console.log(result);

function userLoginMessage(username) {
    return `${username} is loggin succeed!`;
}

function userLoginMessageWithDefaultValue(username='Peter') {
    return `${username} is loggin succeed!`;
}


console.log(userLoginMessage("Peter"));
console.log(userLoginMessage(""));
console.log(userLoginMessage());

console.log(userLoginMessageWithDefaultValue());







