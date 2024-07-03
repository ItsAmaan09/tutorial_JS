var myName = 'Mohammed';
let myAge = 23;
const isValidLicense = true;
// isValidLicense = false; can't change the const value
if (isValidLicense) {
    var myName = 'Amaan';
    let myAge = 21;
}

console.table([myName,myAge,isValidLicense]);