const user={
    username:"shivam",
    price:999,

    welcomemessage: function(){
        // console.log(`${this.username},welcome to the website`);
        // console.log(this);
        //ansshivam,welcome to the website
// {
//     username: 'shivam',
//     price: 999,
//     welcomemessage: [Function: welcomemessage]
//   }
//   shivu,welcome to the website
//   {
//     username: 'shivu',
//     price: 999,
//     welcomemessage: [Function: welcomemessage]
//   }
  }
}
// user.welcomemessage()
// user.username="shivu"
// user.welcomemessage()

// console.log(this);
//when u r in node environment that time this environment show empty set

// const chai= function(){
//     let username="shivam"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username="shivam"
//     console.log(this.username);
// }

const chai = () => {
    let username="shivam"
//     console.log(this);
 }

//chai

// const addtwo=(num1,num2)=>{
//     //explicit return
//   return num1+num2
// }

//inplict return
// const addtwo=(num1,num2)=>num1+num2
// const addtwo=(num1,num2)=>num1+num2
const addtwo=(num1,num2)=>({username:"shivam"})

console.log(addtwo(3,4))


