const userEmail = []

if (userEmail){
    console.log("got user email");
    
}
else{
    console.log("dont have an email");  
}


//FALSY values

// false , 0 , -0 , Bigint 0n , "" , null , undefined , NaN 

//truthy values

//"0" , "false" , " " , [] , {} , function(){}

// if(userEmail.length === 0){
//     console.log("array is empty");
    
// }

// const empObj = {}

// if(Object.keys(empObj).length === 0){
//     console.log("object is empty");
    
// }

//NULLISH Coalescing Operator (??): null , undefined   
// it returns RHS operand when LHS operatorid null or undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 5 ?? 10      // here it assigns the first value it gets

console.log(val1);

//TERNIARY OPERATOR
//it takes three operands: condition followed by a '?', then an expression to execute if the condition is truthy 
// followed by a colon ':', and finally the expression to execute if the condition is falsy
// it is frequently used as an alternative of if...else statement
// condition ? true : false
const teaprice = 100
teaprice <= 80 ? console.log("less than 80") : console.log("more than 80")




