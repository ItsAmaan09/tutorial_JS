const course = {
    courseName: "JS",
    price: "1999",
    instructor: "Amaan"
}

// course.instructor;

const { instructor } = course;
const { instructor: instr } = course; // give alias/own name to keys of an object 

console.log(instructor);
console.log(instr);

// free api =>
// https://jsonplaceholder.typicode.com/users 


// {
//     "name": "Mohammed Amaan",
//         "courseName": "JS",
//             "price": "1999"
// }

// [

//     {
//         "name": "Mohammed Amaan",
//         "courseName": "JS",
//         "price": "1999"
//     },
//     {
//         "name": "Mohammed Hafiz",
//         "courseName": "C++",
//         "price": "999"
//     },
//     {
//         "name": "Mohammed Aawez",
//         "courseName": "C",
//         "price": "1999"
//     },
//     {
//         "name": "Mohammed Nauman",
//         "courseName": "Node",
//         "price": "1999"
//     }
// ]