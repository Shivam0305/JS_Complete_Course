
// function saymyName() {
//     console.log("s");
//     console.log("h");
//     console.log("i");
//     console.log("v");
//     console.log("a");
//     console.log("m");
// }
// saymyName()


// addtwonumbers(3,4)
// const result=addtwonumbers(3,4)
// console.log("Result : ",result);
// console.log(typeof result);

function loggedinuserMessage(username="shiva"){
    if(!username){
        // username === undefined
        console.log("plss enter a username");
        return
    }
    return `${username} just logged in `
}
// console.log(loggedinuserMessage());
// console.log(loggedinuserMessage("shivam"));


function calculatecartprice(val1, val2,...num1){
    return num1
}
console.log(calculatecartprice(400,300,200,500,700));

const user = {
    username:"shivam",
    prices:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
}
// handleObject(user)
handleObject(
    {
        username:"shivu",
        prices:399
    }
)

const mynewarray=[100,300,400,500,600]

function returnSecondValue(getarray){
    return getarray[4]
}
console.log(returnSecondValue([100,300,400,500,600]));