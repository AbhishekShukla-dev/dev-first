// JAVASCRIPT EXECUTION CONTEXT is of three types global and function and Eval execution context

// a box with js codes runs in two phases :  memory creation phase and execution phase

// in memory phase the variables are defined without their values e.g.- val1 - undefined
// in execution phase the value of variables are defined e.g - val1 = 10
// everytime a function is executed a 'new execution context' is defined which has - new variable environment + execution thread
// when a function is defined in execution phase it again caries out memory allocation phase and execution phase
//step 1 :global execution - this
// step 2 :memory phase - variables are collected and kept
// step 3 :execution phase - value is assigned
// step 4 :
let val1 = 10
let val2 = 5
function addNum(num1 , num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10 , 2)

console.log(result1);
console.log(result2);


// call stack 

function one(){
     console.log("one");  
     two() 
 }
  function two(){
     console.log("two");
         three()   
 }
 function three(){
    console.log("three"); 
     }

 one()
 two()
three()