const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);

// console.log(Math.PI);
// Math.PI=5;
// console.log(Math.PI )


// answer
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

const chai = {
    name : "masala chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi banni");
    }
}


// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperties(chai, 'name', {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (const [key, value] of object.entries((chai))) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
    
}