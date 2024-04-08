//var c=300
let a=30
if (true) {
    let a=20
    const b=30
    var c=40
    console.log("inner :"+a);
}

console.log(a);
console.log(b);
console.log(c);

function one(){
    const username="shivam",
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    two
}
one()
if (true) {
    const username="shivam",
    if (username==="shivam") {
        const website="shivam"
        console.log(username+website);
    }
    // console.log(website);
}
console.log(username);

//++++++++++++++ interisting one

function addone(num){
    return n+1
}

addone (5)

const addtosum = function(num2){
    return n+2
}

addTwonumber=5