// DOM
// arrow function
// callback function
// higher order function
// map,filter, reduce
// add to cart feature project

// DOM

// Document Object Model

// const h1 = document.querySelector("h1");
// const h1 = document.getElementById("head");
// const h1 = document.getElementsByTagName("h1");
// const h1 = document.getElementsByClassName("heading");
// const h1 = document.querySelectorAll("h1");
// console.log(h1);

// console.log(document.childNodes[1].childNodes[1].childNodes[1].innerHTML);

// const div = document.querySelector(".container");

// div.innerHTML = ` <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>`

// const ul = document.createElement("UL");
// const li1 = document.createElement("LI");
// const li2 = document.createElement("LI");
// const li3 = document.createElement("LI");

// const li1Text = document.createTextNode("Home");
// const li2Text = document.createTextNode("About");
// const li3Text = document.createTextNode("Contact");

// li1.appendChild(li1Text)
// li2.appendChild(li2Text)
// li3.appendChild(li3Text)

// ul.appendChild(li1)
// ul.appendChild(li2)
// ul.appendChild(li3)

// div.appendChild(ul);

// console.log(ul.childNodes);
// console.log(ul.parentElement);
// console.log(ul.firstChild.innerHTML);
// console.log(ul.lastChild.innerHTML);
// console.log(ul.firstChild.remove());
// console.log(ul.tagName);
// console.log(li1Text.nodeValue);
// console.log(ul.nodeType);
// console.log(li1Text.nodeType);

// arrow function

// function greetUser(name){
//     return "Hello " + name;
// }
// console.log(greetUser("abdullah"));

// const greetUser = (name) => {
//     return "Hello " + name;
// }

// const greetUser = name => "Hello " + name;

// console.log(greetUser("abdullah"));

// ES6
// ecma script 6

// what is ecma script?

// callback function

// setTimeout(function (){} , 1000)
// setTimeout(() => {}, 1000)

const div = document.querySelector(".container");

const fruits = ["apple", "banana", "grapes", "mango", "orange", "pineapple"];

// foreach
// const foreachLoop = fruits.forEach((item , index)=>{
//     console.log(item , " ==> " , index);
//     div.innerHTML += `<h2>${index + 1} : ${item}</h2>`
//     return item
// })

// console.log(foreachLoop);

// map

// const mapLoop = fruits.map(item => {
//     console.log(item);
//     return item + " updated "

// })
// console.log(mapLoop);

// foreach vs map
// foreach does not return anything
// map returns a new array

// filter

// const numberArray = [
//   10, 25, 30, 45, 50, 60, 75, 80, 90, 100, 120, 130, 140, 150, 160,
// ];

// const filterArr = numberArray.filter(item => {
//     return item < 50
// })
// console.log(filterArr);


// reduce

const numberArray = [
  10, 25, 30, 45, 50, 60, 75, 80, 90, 100, 120, 130, 140, 150, 160,
];

// const sum = numberArray.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// }, 0);

// const sum = numberArray.reduce((acc , cval)=>{
//     console.log("acc ==> " , acc);
//     console.log("cval ==> " , cval);
//     return acc + cval
    
// } , 0)

// console.log(sum);


// higher order function vs callback function

// callback function is a function that is passed as an argument to another function
// higher order function is a function that takes another function (callback) as an argument