const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network

    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function () {
    console.log("Promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function () {
    console.log("Promise 2 consumed");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({usernamr:"Shivam", email:"code@gmail.com"},1000)
    })
})
promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error =false;
        if(!error){
            resolve({username: "chandraveer", password: "123456"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function (error) {
    console.log(error);
})
.finally(() => console.log("the promise is either resolve or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function () {
        let error =true;
        if(!error){
            resolve({username: "javascript", password: "1234"})
        }else{
            reject('ERROR: Code went wrong')
        }
    },1000)
})

async function consumePromisefive() {
   try {
    const response = await promiseFive 
   console.log(response);
   } catch (error) {
     console.log(error);
   }
}

consumePromisefive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//        const data =await response.json()
//        console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((responce) => {
    return responce.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))