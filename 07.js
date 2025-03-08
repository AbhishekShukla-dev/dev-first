//const score = 400
//console.log(score);

//const balance = new Number(100)

// console.log(balance);
// console.log(balance.toString().length);  // by changing the data type to string we can also access the length of string  
// console.log(balance.toFixed(2));        // converts the number to string and displays the number upto defined decimal places and also rounds-off the number here its - 2

// const otherNumber = 23.8344
// console.log(otherNumber.toPrecision(3)); // used for numbers with many decimal places

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));



//                   MATHS                       //


// console.log(Math);
// console.log(Math.abs(-4));  //changes the sign 
// console.log(Math.round(4.3));  //rounds-off the number
// console.log(Math.ceil(4.2));   //rounds-off to the highest value i.e. 5
// console.log(Math.floor(4.9));  //rounds-off to the lowest value  i.e. 4
// console.log(Math.min(4,3 ,5,2,1));  //to find smallest number
// console.log(Math.max(4,5,6,7,9,1));  //to find the highest number 



console.log(Math.random());  // to get any random number not zero
console.log((Math.random())*10);  //random *10 but we may still get decimal numbers
console.log((Math.random())*10 + 1);  // to prevent getting decimal numbers


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max- min +1)) + min); //floor to get min value of random by specifying the range and adding 1 to prevent 0 and adding minimum to start from the minimum of the range 

