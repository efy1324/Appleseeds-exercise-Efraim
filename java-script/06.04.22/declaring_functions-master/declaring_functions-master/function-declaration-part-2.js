/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

    Submit the file to Hive

*/

// From function declarations to explicit and implicit return functions (one of each).
// function welcome() {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     return welcome;
// }


// // constfunction wlecome() {
//     return(
//         4 + 5
//     )
// }

const welcome = () => ('Welcome to Appleseeds Bootcamp!');
console.log(welcome());
// const welcome2 = () => 4
// const num = welcome2()


// function power(a) {
//     let myNumber = a;
//     let result = Math.pow(myNumber, 2);
//     return result;
// }
const power = (a) => {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

// From function expressions to IIFE functions.
// const squareRoot = a => Math.sqrt(a);
function squareRoot(a) {
    return Math.sqrt(a);
}

// const randomNumbers = (a, b) => Math.random() * (a - b) + b;
function randomNumbers(a, b) {
    return Math.random() * (a - b) + b;
}


