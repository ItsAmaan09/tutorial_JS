//  Map, Reduce , filter :-

const points = [1,2,3,4,5,6,7,8,9,10];

const newPoints = points.filter((p)=> p > 5);

//  return keyword is mandatory because you open a scope {}
// const newPoints2 = points.filter((p)=> {
//      p > 5 
// })
console.log(newPoints);

// by using forEach :-
// const newPointArr = [];

// points.forEach((p)=>{
//     if(p > 5) {
//         newPointArr.push(p);
//     }
// })
// console.log(newPointArr);


//  ++++++++++++++++++++++++++++++++++++++++++++++++

const num = [2,3,4,5];

const numTen = num.map((n)=> n + 10);

console.log(numTen);

// Q. try with forEach loop......

//  chaining of map 
const filterNum =num.map((n)=> n+10).map(n=> n+1).filter(x=> x > 15);

console.log(filterNum);



//  ++++++++++++++++++++++++++++++++++++++


const balance = [100,200,2000,50,500,1000];
//  first time accumulator will be initial value.
//  than nxt time accumulator will be sum of prev. and take total value:-  
const totalBalance = balance.reduce((acc,currVal)=>{
    console.log(`Acc :- ${acc} , CurrValue :- ${currVal}`);
    
    return acc+currVal;
},0);

console.log(totalBalance);