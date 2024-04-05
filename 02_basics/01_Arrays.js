// array

const myArr=[0,1,2,3,4,5]
const myheros=["shaktiman","naagraj"]

const myArry2=new Array(1,2,3,4)
// console.log(myArr[1]);

//Array Method
myArr.push(6,7)
//6,7 add in last of the array
// console.log(myArr);

myArr.pop()
//last element is deleted from the array
// console.log(myArr);
// add 9 in first of the array
myArr.unshift(9)
//9 is deleted from the array
myArr.shift()
// console.log(myArr);

const newArr=myArr.join()
//In this process datatype is change
// console.log(newArr);

//slice and splice

console.log("A", myArr);

const myn1=myArr.slice(1,4)
console.log(myn1);

console.log("B", myArr);

const myn2=myArr.splice(1,4)
console.log("c",myArr);
console.log(myn2);