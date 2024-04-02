//Premitive
// 7 types: string,number,boolean,null,undefined,symbol,BigInt
const score=100;
const scorevalue=100.3;
const isloggedIn=false;

const outsideTemp=null;

let userEmail;


// datatypes is symbol
const id= Symbol('123')
const anotherId=Symbol('123')

// console.log(id===anotherId)

// bigint datatypes
const bigNumber=23453345335558474n


//Reference or Non Primitive
// 3 types: Array,objects,Function


// object datatypes
const heros=["Bhagat Singh","Chandrashekhar Azad","APJ Abdul kalam"]

// object datatypes
let myobj = {
    Name :"shivam",
    userEmail :"shivam123@gmail.com",

}
// function
// datatypes fuction
// const myFunction=function(){
//     console.log("Hello World");
// }
console.log(typeof(id));

//Stack and heap Memory

let myyoutubename ="Shivam"
let anothername=myyoutubename
anothername='real facts'
console.log(myyoutubename);
console.log(anothername);

let userone = {
   email:"Shivam1234@google.com",
   upi:"user@ybl"

}
let userTwo=userone


userTwo.email="shivam@google.com"

console.log(userone.email);
console.log(userTwo.email);


