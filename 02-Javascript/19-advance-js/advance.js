// Variable Scoping //p
// local storage  //p
// Closure //p
// lexical scoping //p
// IIFE //p
// Object Methods (keys,values,freez,entries)//p 
// Exponentiation Operator //p
// Optional chaining //p
// Destructuring //p
// Template literals //p
// Default parameters //p
// Rest parameter //p
// Spread Operator //p
// Arrow functions //p
// Enhanced object literals 
// Iterators & For..of 
// Map 
// Array methods 
// Higher-order function 
// CallBack 
// Promises 
// Ternary Operator 
// modules // firebase ma prhainga


// console.log("hello world");


// local storage

// 5mb tk ka koi bhi string store krwaskta ho.


// const cities = ['karachi' , 'lahore' , 'Islamabad' , 'Quetta']
// const btn = document.querySelector("#btn")
// const aboutBtn = document.querySelector("#about-btn")

// function addcities (){
//     const userInput = prompt("enter city names");
//     cities.push(userInput)
//     console.log(cities);
// }

// btn.addEventListener('click' , addcities)


// aboutBtn.addEventListener('click' , ()=>{
//     localStorage.setItem("cities" , JSON.stringify(cities))
//     window.location = "about.html"
// })



// Variable Scoping 

// global variable
// local variable



// let city = "Quetta"; // global variable

// function getCity(){
//     let population = 100000; // local variable
//     console.log('city inside func' , city , '==>' , population);

// }

// console.log(population);

// getCity()



// function scope
// block scope

// {} block / scope
// if(true){
//     var username = "Abdullah"; // function scope
//     let city = "karachi"; // block scope
//     const age = 22; // block scope
// }


// console.log(username);
// console.log(city);
// console.log(age);



// Closure 

// function outerFunc(){
//     console.log("outer function called");

//     function innerFunc(){
//         console.log('inner function called');

//     }


//     return innerFunc

// }

// const func = outerFunc()
// func()
// console.log(func);


// outerFunc()()

// lexical scoping 



// function outerFunc(){
//     let a = 1
//     console.log("outer func called");

//     function innerFuncOne(){
//         console.log(a);
//         let b = 2
//     }

//     function innerFuncTwo(){
//         console.log(a);
//         let c = 3
//     }

//     innerFuncOne()
//     innerFuncTwo()
// }


// outerFunc()



// IIFE 
// immediately invoked function expression


// (function hello(){
//     console.log("hello world");

// })()

// // hello()



// Object Methods (keys,values,freez,entries) 

// const user = {
//     fullName: "Muhammad Abdullah",
//     age: 22,
//     isLoggedIn: true
// }

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));




// Object.freeze(user)
// user.lastName = "khan"
// delete user.age
// console.log(user);




// Exponentiation Operator

// let num = 5;
// console.log(num ** 5);
// console.log(5*5*5*5*5);


// 5*5*5*5*5



// Optional chaining

// const user = {
//   name: "John",
//   address: {
//     city: "New York",

//   }
// };

// console.log(user.address?.street?.house);

// console.log(user.address?.street?.name);

// Destructuring 

// const user = {
//     fullName: "Muhammad Abdullah",
//     age: 22,
//     email: "mabdullah@gmail.com",
//     isLoggedIn: true
// }

// const {fullName , age} = user
// console.log(fullName);


// console.log(user.fullName);



// const fruits = ["apple" , "banana" , "orange"];

// const [fruit1 , fruit2 , fruit3] = fruits
// console.log(fruit2);



// Template literals 

// const username = "Muhammad Abdullah";
// const age = 22;

// console.log(`username is ${username} and user age is ${age}`);


// Default parameters 

// function greetUser(username = "Ammar"){
//     console.log(`hello ${username}`);

// }

// greetUser("abdullah")

// Rest parameter 

// function usernames(...username){
//     console.log(username);

// }

// usernames("abdullah" , "usman" , "Ammar" , "affan")


// Spread Operator 

// const num1 = [1, 2, 3, 4, 5];
// const num2 = [6, 7, 8, 9, 10];
// const num3 = [11, 12, 13, 14, 15]

// const newArr = [num1 , ...num2 , ...num3]
// console.log(newArr);



// Arrow functions 

// hoisting / this

// const greetUser = (username) => {
//     console.log(this);

//     console.log(`hello ${username}`);

// }
// greetUser("abdullah")


// const getTag = (tag)=>{
//     console.log(tag);

// }
// function getTag(tag){
//     console.log(tag);

// }


// const user = {
//     fullName: "Muhammad Abdullah",
//     age: 22,
//     isLoggedIn: true,
//     greetUser: () => {
//         console.log(this.fullName);

//     }
// }

// user.greetUser()



// Enhanced object literals 

// const username = "abdullah";
// const age = 22;

// const user = {
//     username, age
// }
// console.log(user);



// Iterators & For..of 

// const fruits = ["apple" , "banana" , "orange"];

// for (const element of fruits) {
//     console.log(element);
    
// }



// Ternary Operator

// const age = 17;

// age >= 18 ? console.log("welcome to gym") : console.log("no access")


// age >= 18 ?  console.log("welcome to gym") : age >= 15 ? console.log("1000 extra") : console.log("no access")

// if(age >= 18){
//     console.log("welcome to gym");
    
// } else if(age >= 15){
//     console.log("1000 extra");
    
// }

// else {
//     console.log("no access");
    
// }


// var function scope
// let block scope
// const block scope


// var user = "abdullah"; // global var

// function greetUser(){
//     var age = 22; // local var / f
//     console.log(age);
    
// }


// if(true){
//     let username = "Abdullah"
// }

// console.log(username);
