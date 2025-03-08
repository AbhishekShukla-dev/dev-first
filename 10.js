//singleton - one of its kind and intantiated only once (the method we are using right now)

//object.create (constructive method)

//object literals

const mySym = Symbol("key1")
const JsUser = {
    name : "shukla", 
    "full name" : "abhishek shukla", 
    [mySym]: "myKey1",               // syntax to add symbol data type into objects is by using '[]' otherwise it returns and is defined as string.
    age : 21,
    location : "noida",
    email : "shukla1234@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}
// console.log(JsUser.email);    // we can access the data using '.'
// console.log(JsUser["location"]);
// console.log(JsUser["full name"]);  // few instances we need to use '[]' to fetch value
// console.log(JsUser[mySym]);        // do


JsUser.email = "abhi12345@gmail.com"  // renew the value just use '=' and put new value
//Object.freeze(JsUser)                 // to lock the object so that no one can change the given value
JsUser.email = "abhishek@gmail.com"
//console.log(JsUser);

JsUser.greeting = function( ) {
    console.log("hello js user");
}
JsUser.greetingTwo = function( ) {
    console.log(`hello js user, ${this.name}`);   //the back ticks with ${} is used to fetch and print value along with the given value
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


//+++++++ OBJECTS PART-2+++++++//

//const tinderUser = new Object()   // singleton object

const tinderUser = {}               // non-singleton object

tinderUser.id = "123abd"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email :"abhi123@gmail.com",
    fullname : {
        userfullname : {
        firstname : "abhi",
        lastname : "shukla"
     }
   }
}

//console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

//const obj3 = { obj1 , obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4 ) //used to assign value

const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "shukla@gmail.com"
    },
    {
        id: 1,
        email: "shukla@gmail.com"
    },
    {
        id: 1,
        email: "shukla@gmail.com"
    }
]

users[1].email
//console.log(tinderUser);

// console.log(Object.keys(tinderUser));    //.keys gives keys in array
// console.log(Object.values(tinderUser));   // .values to fetch values
// console.log(Object.entries(tinderUser));   // gives keys and values as arrays inside a array


//console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check the availability of property



//      OBJECT DE-STRUCTURING

const course = {
    course: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//console.log(course.courseInstructor);    //easier way but issue when repeated severals times


const {courseInstructor : Instructor} = course

//console.log(courseInstructor);
console.log(Instructor);





