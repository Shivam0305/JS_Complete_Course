// if
// const isuserLoggedIn=true
// const temperature=41

// if(temperature < 50){
//     console.log("less than 50");
// }
// else{
//     console.log("temprature is greater than 50");
// }
//<,>,<=,>=,==,!=,===,!==

// console.log("execute");

// const score=200
// if(score<100){
//     let power="fly"
//     console.log(`uses power: ${power}`);
// }

// console.log(`uses power: ${power}`);

const balance =1000

// if(balance>500) console.log("test");

// if(balance<500){
//     console.log("less than 500");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if (balance<900) {
//     console.log("less than 750");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn=true
const debitcard = true
const loggedInFormGoogle =false
const loggedInFromEmail=true

if (userLoggedIn&&debitcard) {
    console.log("Allow to buy Course");
}
if (loggedInFormGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
