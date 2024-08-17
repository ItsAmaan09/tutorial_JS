
let index = 1;
while (index <= 10) { // must be terminated from the loop... otherwise loops run infinity.
    console.log(index);
    index = index * 2;
}


let players = ['Rohit','Head','Starc','Bumrah'];
let indexofArr = 0;
while (indexofArr < players.length) {
    console.log(players[indexofArr]);
    indexofArr++;
}

let points = 11;
do {
    console.log(`Point is ${points}`);
    points = points + 1;
} while (points <= 10);