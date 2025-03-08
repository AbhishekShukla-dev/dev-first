const name = "shukla"
const repoCount = 50

//console.log(name+  repoCount+  "value");   old way

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('shukla-as-com')

console.log(gameName[0]);
console.log(gameName.__proto__);  //unables the use of prototype of the object to the console i.e. gameName


console.log(gameName.length);          // number of substrings/characters in string
console.log(gameName.toUpperCase());  //string to uppercase
console.log(gameName.charAt(2));      //to display the substring at asked position
console.log(gameName.indexOf('t'));  // to display the position of the given substring

const newString  = gameName.substring(0 , 4)  // to display the substrings on the given position
console.log(newString);

const newStringOne  = "  shukla  "
console.log(newStringOne);
console.log(newStringOne.trim());  // to trim the part of the string from start, end, or both

const url = "https://shukla.com/shukla%25abhishek"

console.log(url.replace('shukla%25', '-'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));  // to split the string to substrings using separators i.e. '-'






