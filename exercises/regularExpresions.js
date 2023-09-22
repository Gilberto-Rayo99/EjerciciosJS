let str = "This is a string is is is";
const word = "is";


const newStr=str.replace(new RegExp(word,"g"),"");

console.log(newStr);