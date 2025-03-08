// const user =  {
//       username : "abhishek",
//       price : 999, 

//       WelcomeMessage : function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
        
//       }
// }


//  user.WelcomeMessage()
               
//  user.username = "sam"
//  user.WelcomeMessage()  // here we are able to change the value because the  '${this.username}' helps in dynamic declaration of value therefore we can change the value as per given input


//console.log(this);    // it returns {} value as it has no object declared and in browser it returns window

// function chai(){
//     let username = "abhishek"
//     console.log(this.username);    // this works with objects not functions therefore this returns undefined
    
// }                                   //this is global object
                                        
// chai()

//const chai ()

// function chai(){
//     let username = "abhishek"
//  console.log(this.username); 
// }

//  const chai=  () =>{
//     let username = "abhishek"
//  //console.log(this.username); 
// }


  //chai()
 // const addTwo = (num1, num2) => {    // syntax for arrow function
  //  return num1 + num2
  //}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//explicit return where we have to use curly brackets for output of value
//implicit return where we do not have to use curly brackets
//const addTwo = (num1, num2) =>  ( num1 + num2)  //return isn't required not using curly brackets,  this is implicit return
//const addTwo = (num1, num2) =>  ( num1 + num2)
const addTwo = (num1, num2) =>  ({username: "abhishek"})      // to use object while implicit return we put object inside curly brackets
//console.log(addTwo(3 , 4));


// const myArray = [2,3,4,7,8]
// myArray.forEach()



// Immediately invoked functions expressions (IIFE)

//IIFE is used to avoid disturbance in function due to global scope as they are accessible by function scope

(function chai(){                   // named IIFE is function with name, here 'chai'
    console.log(`DB CONNECTED`);
    
})();
 
( (name) => {                               //unnamed IIFE is function with no name
    console.log(`DB CONNECTED TWO ${name}`);
    
}) ("abhishek")