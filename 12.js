// let a = 10
// const b = 20
// var c = 30  

                // '{}' is scope when used with functions or conditional or loops statements but in objects its used for object declaration
//var c = 300      // the code outside {} are global scope once defined no matter what the scope is it will be printed

let a = 300
if(true){ 
    let a = 10           // value from outside can come inside scope 
    const b  = 20         // value inside of scope cannot move outside
            //  the code inside {} are block scope
     //console.log("INNER: ", a);
            
}

//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username = "abhishek"
 
    function two(){
        const website = "youtube"    // in nested function child functions can access variable from parent function
        console.log(username);
        
    }
    //console.log(website);
    two()
}
//one()


if (true){
    const username = "abhishek"
    if (username === "abhishek"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
    
}
console.log(username);




addone (5)
function addone(num){
    return num+1
}

 //hoisting when we access value before declaration

// addTwo(5)                       
// const addTwo : (num: any) {
//     return num+2
// }


