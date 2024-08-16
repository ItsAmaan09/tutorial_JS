// Loops or Iterations =>
// Syntax :-

/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
*/


// for (let index = 0; index < array.length; index++) { array is not defined : error
//     const element = array[index];
//     console.log(element);
// }
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log('Value is 5');
    }
    console.log(element); // print value from 0 till 10
}
// console.log(element); // error , because we defined element into block of if statement

for (let i = 0; i < 10; i++) {
    console.log(`Outer loop : ${i}`)
    for (let j = 0; j < 10; j++) {
        console.log(`Inner loop : ${j} and outer loop : ${i}`);
    }
}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop : ${i}`)
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

let players = ['Rohit', 'Head', 'Bumrah', 'Cummins'];
console.log(players.length);

for (let p = 0; p < players.length; p++) {
    const element = players[p];
    console.log(element);
}


//  Break And Continue keyword :-

for (let k = 0; k < 10; k++) {
    // console.log(k);
    if(k == 5){
        console.log(`you have reached at value ${k}`);
        break;
    }
    console.log(k);
}
for (let k = 0; k < 10; k++) {
    // console.log(k);
    if(k == 5){
        console.log(`will skip  ${k}`);
        continue;
    }
    console.log(k);
}