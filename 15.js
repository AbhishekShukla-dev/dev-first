// if 

// const temperature = 41
// if(temperature===41 ){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }
// console.log("Executed");


// < , > , <= , >= , == , != , === , !==
// '===' is used to check that not only the value but data type is also same 

// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
    
// }
// console.log(`User power: ${power}`);    // this line gives error as power is not defined here its only in block scope

const balance = 1000
//if (balance > 500) console.log("test");

// if(balance < 500){
//     console.log("less than 500");
//     }
//     else if(balance < 750){
//         console.log("less than 750");
//     }
//     else if(balance < 900){
//         console.log("less than 900");
//     }
//     else{
//         console.log("less than 1200");
//     }
    
// const userLoggedIn = true
// const debitCard  = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if(userLoggedIn && debitCard && 2==2){    // '&&' is and to check both conditions
//     console.log("allow to buy course");
// }
// if(loggedInFromGoogle || loggedInFromEmail){   // '||' is or to verify both statements
//     console.log("user logged in");
// }




//  syntax for SWITCH statement //

// switch (key) {
//     case value:

//     break;                //

//     default:
//     break;
// }


// const month = 3
// switch (month){
//     case 1: 
//     console.log("jan");
//     break;

//     case 2:
//         console.log("feb");
//         break;

//         case 3: 
//         console.log("mar");
    //   break;

    //     case 4: 
    //     console.log("april");
    //     break;                           // breaks the control flow and if not used where the condition is satisfied it runs all the following code except default value

    //     default:                        // sets default value if value not got
    //     console.log("default case match");
    //     break;
    //     }

    const month = "march"
    switch (month){

        case "jan": 
        console.log("jan");
        break;
    
        case "feb":
            console.log("feb");
            break;
    
            case "march": 
            console.log("march");
            break;

            case "april": 
            console.log("april");
            break;

            default: 
            console.log("no month");
    }           


            




