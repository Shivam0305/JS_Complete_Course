// dates

let mydate=new Date()
// console.log(mydate);
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());

// let mycreatedate=new Date(2024,5,4);
let mycreatedate = new Date("03-05-2024")
// console.log(mycreatedate.toLocaleString());

let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(mycreatedate.getTime());
// console.log(Math.round(Date.now()/1000));

let newdate=new Date()
console.log(newdate.getTime());
// ans -1712298398626
console.log(newdate.getMonth()+1);
//ans- 4
console.log(newdate.getDay());
// and-5

newDate.toLocaleString('default',{
    weekday:"Long",
})