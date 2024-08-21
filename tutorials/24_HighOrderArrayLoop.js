// Array specific loops:-

//  For of loop

// ["", "", ""]
// [{} , {} , {} ]

const numbers = [2, 5, 11, 8, 10]

for (const num of numbers) {
    console.log(num);

}

const userName = "Peter Parker";

for (const name of userName) {
    console.log(name);

}



// Maps:-

const map = new Map();

map.set("IN", "India");
map.set("USA", "United states of america");
map.set("ARG", "Argentina");

// map.set("IN","India"); // not set beacause map is known as unique values
console.log(map);
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United states of america',
  'ARG' => 'Argentina'
}
*/
for (const key of map) {
    console.log(key);
}
/* 
[ 'IN', 'India' ]
[ 'USA', 'United states of america' ]
[ 'ARG', 'Argentina' ]
*/

for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
}

const gameObj = {
    '1': 'GTA',
    '2': 'Spiderman',
}

// for (const [key, value] of gameObj) {
//     console.log(`${key} :- ${value}`);  /// object isn't iterable while map is it.
// }

for (const key in gameObj) {
    console.log(`${key} := ${gameObj[key]}`);
}

const myArr = ["ab", "cd", "ef", "gh"];

for (const key in myArr) {
    //  console.log(key);
    console.log(myArr[key]);
}



// =================================================
// forEach loop :-

const language = ["js", "node js", "mongodb", "react"];

language.forEach(function (x) {
    console.log(x);
});

language.forEach((x) => {
    console.log(x);
})

language.forEach(printValue);

function printValue(params) {
    console.log(params);

}

language.forEach((x,index,arr)=>{
    console.log(x,index,arr);
    
})

const userList = [
    {
        id:1,
        name:'peter'
    },
    {
        id:2,
        name:'wilson'
    },
    {
        id:3,
        name:'root'
    }
];

userList.forEach((data)=>{
    // console.log(data);
    console.log(data.name);
    
});

//  forEach not return the value. also not stored in variable
const result = language.forEach((item)=>{
    console.log(item);
    return item;
})

console.log(result); 
