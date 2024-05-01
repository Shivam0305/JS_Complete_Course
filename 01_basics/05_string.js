const name="shivam"
const repocount=50
console.log(`Hello my name is ${name} and my repocount is ${repocount}`);
const gamename=new String ('shivam-hc')
console.log(gamename[0]);
console.log(gamename.__Proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('i'));

const newString=gamename.substring(0,4)
console.log(newString);

const anotherString=gamename.slice(-8,4)
console.log(anotherString);

const newstringone="  shivam "
console.log(newstringone.trim());
//trim is use for removing space
console.log(newstringone);

const url="https:/shivam.com/shivam %20 Jha"
console.log(url.replace ('%20','-'));
console.log(url.includes('sunday'));
console.log(gamename.split('_'));
