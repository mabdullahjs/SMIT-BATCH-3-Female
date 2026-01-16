// Variable Scoping
// local storage 
// Closure 
// lexical scoping 
// IIFE 
// Object Methods (keys,values,freez,entries) 
// Exponentiation Operator 
// Optional chaining 
// Destructuring 
// Template literals 
// Destructuring 
// Default parameters 
// Rest parameter 
// Spread Operator 
// Arrow functions 
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
