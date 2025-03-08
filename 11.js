function sayMyName() {
console.log("S");
console.log("H");
console.log("U");
console.log("K");
console.log("L");
console.log("A");
}

//sayMyName()

//function addTwoNumbers (number1, number2){      // here number1 and number2 are parameters - assigned variables
   // console.log(number1 + number2);}
    


function addTwoNumbers(number1, number2){    
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3 , 5) // here 3 and a are arguments- assigned values

//console.log("Result: ", result);

function loginUserMessage(username){
    return `${username} just stay logged in`
}

//console.log(loginUserMessage("abhishek"));



//function calculateCartPrice(...num1){      //here '...' is rest operator not spread operator, it enables direct entry of values in the array
function calculateCartPrice(val1, val2, ...num1){      //here the val1 takes 200 and val2 takes 300 and  the rest are shown in array.
    return num1
}

//console.log(calculateCartPrice(200, 300, 600, 1000));

const user = {
    username : "abhi",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
