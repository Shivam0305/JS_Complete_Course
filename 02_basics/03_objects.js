// singleton
//object create

//object literals

const mysym=Symbol("key1")
const Jsuser = {
    name:"Shivam",
    "full-name":"Shivam kumar jha",
    [mysym]:"mykey1",
    age:20,
    Location:"Bhubaneshwar",
    email:"shivam@google.com",
    isLoggedIn:false,
    lastLogindays:["Monday","Saturday"]
}
console.log(Jsuser.email);
//ans-shivam@google.com
console.log(Jsuser["email"]);
//ans-shivam@google.com
console.log(Jsuser["full-name"]);
//ans-shivam jha
console.log(Jsuser[mysym]);
//ans-mykey1

Jsuser.email="shivam@chatgpt.com"
// object.freeze(Jsuser)
Jsuser.email="shivam@microsoft.com"
console.log(Jsuser["email"]);
// ans-shivam@microsoft.com without freeze this answer will come


Jsuser.greeting=function() {
    console.log("Hello Js User");
}
console.log(Jsuser.greeting());
//Hello Js User

Jsuser.greetingTwo=function() {
    console.log(`Hello Js User, ${this.name}`);
}
console.log(Jsuser.greetingTwo());
console.log(typeof Jsuser.email);
// Hello Js User,Shivam