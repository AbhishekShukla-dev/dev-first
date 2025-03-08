//# Primitive

//  7 types : String , Number, boolean, null, undefined , symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 37723636876773383433n
//console.log(typeof bigNumber);





// Reference (non-primitive)

// Array, objects , functions

//array
const heros = ["shaktiman", "naagraj", "doga"]

//objects
let myObj = {
    name:"shukla",
    age : 21,
}

//function
const myFunction = function(){
    console.log("hello world");
    
}

//console.log(typeof heros);



// JS is a dynamically typed language

// the data types of all non-primitive data types is "Function" except for function it is object-function 


// types of memory : stack(primitive) , heap(non-primitive)

let myYoutubeName = "shukladotcom"

let anotherName = myYoutubeName
anotherName = " caurc"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo. email = "shukla@google.com"

console.log(userOne.email);
console.log(userTwo.email);


// //since the value of both userOne and UserTwo are same in heap reference therefore the change in the value 
// of userTwo is followed by userOne//

