//FOR 

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
       // console.log("5 is the best number");
}
   // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    //console.log(`outer loop value: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
       //console.log(`inner loop value ${j} and inner loop ${i}`);
       //console.log(i + '*' + j + '=' + i*j);
       
        
    }
    
}


// let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }


//break and continue

 
// for (let index = 0; index <= 20; index++) {
    
//     if(index == 5){
//       console.log(`detected 5`);       // break stops loop when the required value is acquired
//       break 
//     }
//     console.log(`value of i is ${index}`);
// }


// for (let index = 0; index <= 20; index++) {        // continue detects the  required value is acquired and still continues the loop
    
//     if(index == 5){
//       console.log(`detected 5`);
//       continue
//     }
//     console.log(`value of i is ${index}`);
// }


// let myArray = ['flash', 'batman', 'superman']

// let arr = 0
// while (arr < myArray.length){
//     console.log(`value is ${myArray[arr]}`);
//     arr = arr + 1 
// }




// // while loop

// let index = 0
// while (index <= 10){
//     console.log(`value of index is ${index}`);
//     index = index + 2   
// }

// let score = 11            // in do-while loop code is executed before checking conditions
// do{
//      console.log(`score is ${score}`);
//      score++
// }while ( score<= 10);
    


// for of
                                            // does not work on objects
// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);  
// }

// const greetings = "hello world!"
// for (const greet of greetings){
//     console.log(`each character is ${greet}`);
    
// }

// MAPS

// const map = new Map()        // map holds key value pairs and remembers the original insertion order of the keys
// map.set('IN' ,"India")
// map.set('USA', "United States of America")    // map holds only unique values
// map.set('Fr', "France")
// console.log(map);

// for(const [key, value] of map){
//     console.log(key, ':-', value);
    
//}

// const myObject = {
//     game1 : 'NFS',
//     game2 : 'spiderman',
// }

// for(const [key, value] of myObject){
//     console.log(key, ':-', value);
    
// }

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}


// for (const key in myObject) {
//     console.log(`${key} shorrtcut id for ${myObject[key]}`);
    

//}

 const programming = ["js", "rb", "cpp", "cpp"]

//  for (const key in programming) {
//     console.log(programming[key]);
   
// }

// const map = new Map()        // map holds key value pairs and remembers the original insertion order of the keys
// map.set('IN' ,"India")
// map.set('USA', "United States of America")    // map holds only unique values
// map.set('Fr', "France")

// for (const key in object)         // Map is not iteratable so the loop does not works
// {console.log(key);}

//foreach loop : commonly used for arrays

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
    
// })
// coding.forEach( (item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach( (item) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [{
    languageName: "javascript",
    languageFileName: "js"
},
{languageName: "java",
    languageFileName: "js"},
    {languageName: "python",
        languageFileName: "py"}
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})


