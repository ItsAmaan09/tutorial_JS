const userObj = {
    username: 'peter',
    isloggedin: true,

    greetingmsg: function () {
        if (this.isloggedin) {
            console.log(`Welcome ${this.username}, you have logged in success`);
            console.log(this);
            
        }
    }
}

userObj.greetingmsg();
userObj.username = "parker";
userObj.greetingmsg();
// browser global object is Window object......
console.log(this); // {} but if log into browser console then return window object ......


// function checked() {
//     let isValid = true
//     console.log(this.isValid); // only work into obj
// }


// checked()


const printmsg = function()  {
    let msg = "Welcome to js"
    console.log(msg);
}
const printmsgArrowFunction = () => {
    let msg = "Welcome to js arrow"
    console.log(msg);
}

printmsg()
printmsgArrowFunction()

const addTwo = (num1,num2)=>{
    return num1 + num2
}

console.log(addTwo(3, 4));


const addTwoImplicitReturn = (num1,  num2) => num1 + num2;  // or below
const addTwoImplicitReturn2 = (num1,  num2) => (num1 + num2);

console.log(addTwoImplicitReturn(5, 6));

// const objFunc = () => {username:'peter'} // undefined 
const objFunc = () => ({username:'peter'}) // undefined 

console.log(objFunc()); 
