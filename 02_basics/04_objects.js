//const tenderuser=new object()

const tenderUser={}

tenderUser.id="1234"
tenderUser.name="shivam"
tenderUser.isLoggedIn=false

// console.log(tenderUser);

const regularUser={
    email:"shivam@google.com",
    fullName:{
        userfullname:{
            firstname:"shivam",
            lastname:"jha"
        }
    }
}
// console.log(regularUser.fullName.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"d",6:"e"}

// const obj4={obj1,obj2}

// const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2,...obj3}
console.log(obj4);

const user=[
    {
        id:1,
        gmail:"s@google.com"
    },
    {
        id:1,
        gmail:"s@google.com"
    },
    {
        id:1,
        gmail:"s@google.com"
    }
]
user[1].email
console.log(tenderUser);
console.log(Object.keys(tenderUser));
console.log(Object.values(tenderUser));
console.log(Object.entries(tenderUser));

console.log(tenderUser.hasOwnProperty('name'));