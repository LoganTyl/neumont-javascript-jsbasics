let myString = "This is a string of words.";
let myRegex = /\b\w+/g;

let myArr = myString.match(myRegex);
console.log(myArr);

console.log(myRegex.test(myString));

myRegex = /is/g;

console.log(myString.search(myRegex));

console.log(myString.replace(myRegex, "IS"));

myRegex = /\s/g;
let myArr2 = myString.split(myRegex);
console.log(myArr2);