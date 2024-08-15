function one() {
    const userName = "Mohammed"

    function two() {
        const userName2 = "Amaan"       
        console.log(userName);
    }
    // console.log(userName2);
    
    two();
}


// one();




multiplyByTwo(5) // no problem
function multiplyByTwo(number) {
    return number * 2;
}

multiplyByTwo(5)


// multiplyByFive(10);  // not executed
const multiplyByFive = function(number){
    return number * 5;
}

multiplyByFive(10); 