// array in JS are resizable

const myArr = [0, 1, 2, 3 ,4, 5,]


//shallow copy is a copy whose copy shasre the same reference 
//deep copy do not share the the same reference  

const myHeroes = ["shaktiman", "naagraj"]
const myArr2 = [1, 2, 3 ,4]

//console.log(myArr[1]);

//array methods

// myArr.push(6)
// myArr.pop(6)

myArr.unshift(9) // to add one or more elements to the beginning of an array
myArr.shift()     // removes first element of an array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()  // converts array  to string
// console.log(myArr);
// console.log(typeof newArr);


// slice , splice

// console.log("A", myArr);

// const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1,3)
// console.log("C", myArr);

// console.log(myn2);


// slice takes  out the asked element of the array excluding range but the original array remains same 

// splice takes out the asked element out of the array changing the array

//  '===' is used for strictly checking

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

//const allHeros = marvel_heros.concat(dc_heros)  // concat combines two or arrrays and gives new array
//console.log(allHeros);


//const all_new_heros = [...marvel_heros, ...dc_heros]  // '... - spread' spreads out the elements as individual elements 
//console.log(all_new_heros);

const another_array = [1 ,2 ,3 ,[4, 5, 6], 7, [6,7, [4 , 5 ]]]

const real_another_array = another_array.flat(Infinity)    //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);




console.log(Array.isArray("shukla"));  // to check whether it is array or not
console.log(Array.from("shukla"));    //string to array 
console.log(Array.from({name : "shukla"}));  //INTERESTING:  we need to define which type of array we need like queues or its values else it returns empty array

let score1 = [100, 356 ,754 ,867]
let score2 = [200]
let score3 = [300, 400]

console.log(Array.of(score1, score2, score3)); // combines different values or arrays and gives new array
