// console.log("hello world");


// javascript ka undar har aik cheez aik object ha.

// console.log(typeof ["hello"]);

// collection of keys and properties

// let fruits = ["apple" , "banana" , "orange"];
// console.log(fruits[1]);

// key / property

// const user = {
//     username: "Abdullah",
//     age: 22,
//     city: "Karachi",
//     isLoggedIn: true
// }

// console.log(user);
// console.log(user.username);
// console.log(user['username']);




// const user = {
//     fullName: "Muhammad Abdullah khan",
//     age: 22,
//     isLoggedIn: true,
//     hobbies: ["swimming" , "cricket" , "sleeping"],
//     greetUser: function (){
//         console.log("this inside object.." , this);
        
//         return `hello ${this.fullName}`
        
//     }

// }
// user.greetUser()
// // console.log(user.greetUser());
// console.log(this);


// // window.alert("hello")
// // window.console.log("hello world")






const user = {
    fullName: "Abdullah",
    age: 22,
    email: "mabdullah@gmail.com",
    isLoggedIn: true
}

user.fullName = "Muhammad Abdullah"
user.newProp = "new property"
delete user.email
console.log(user);



// this keyword
// object delete update add krni properties

//obj banana haa name,email,age,greetuser uska baad firstname and lastname baad ma add krna haa or name delete krna ha. greet user ka function jab bhi call hoo to wo return kraa hello '${fullname}'


// const city = {
//     name: "karachi",
//     population: 200000,
//     province: "Sindh",
//     cityGreeting: function (){
//         return `hello ${this.lastname}`
//     }
// }

// city.fullname = "kolachi"
// city.lastname = "hello"
// delete city.name
// console.log(city);

// console.log(city.cityGreeting());




// 4 formfields banaingi name , email , age, city jaisa hi user submit pa click kraiga mera pass console ma aik object ajayega jiska undar values form wali hongi
