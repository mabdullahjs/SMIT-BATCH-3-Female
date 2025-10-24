// console.log("Hello world");

// const head = document.querySelector("#head");
// head.innerHTML = "Hello Pakistan";

// const para = document.querySelector("#para");
// para.innerHTML = "changed through javascript."

// function greetUser(){
//     console.log("hello abdullah");

// }

// const para = document.querySelector("#para");

// para.innerHTML = "testing"
// para.style.backgroundColor = "red"
// para.style.color = "white"
// para.style.padding = "20px"

// function changeStyle() {
//   para.style.backgroundColor = "red";
//   para.style.color = "white";
//   para.style.padding = "20px";
// }

// const head = document.querySelector("#head");
// function changeText(){
//     console.log(head.innerHTML);
//     if(head.innerHTML === "Hello world"){
//         head.innerHTML = "Hello Pakistan"

//     }else {
//         head.innerHTML = "Hello world"

//     }
// }

// const body = document.querySelector("body")
// const head = document.querySelector("#color-head")
// function changeColor(color){
//     console.log("color changed" , color);
//     body.style.backgroundColor = color
//     head.innerHTML = color
//     if(color === "white"){
//         head.style.color = "black"
//     }else {
//         head.style.color = "white"

//     }

// }

// const input = document.querySelector("#fullname");
// const h1 = document.querySelector("#result");
// // console.log(input.value);

// function getVal(){
//     console.log(input.value);
//     h1.innerHTML = "Hello " + input.value

//     input.value = ""

// }

// function clearHead(){
//     h1.innerHTML = ""
// }

//  4 form field banaingi. 4 subjects ka number user daiga. total marks 400. button ka click paa uska obtained marks, percentage and grade.

// let input = document.querySelector("input");

// console.log(Number(input.value));

// Number(input.value)
// Number(input.value)

// const fullName = document.querySelector("#fullname")
// const engMarks = document.querySelector("#engMarks")
// const urduMarks = document.querySelector("#urduMarks")
// const mathsMarks = document.querySelector("#mathsMarks")
// const comMarks = document.querySelector("#comMarks")
// const result = document.querySelector("#result")

// function generateResult(){

//     let totalMarks = 400;
//     let obtainedMarks = +engMarks.value + +urduMarks.value + +mathsMarks.value + +comMarks.value
//     let percentage = obtainedMarks / totalMarks * 100

//     result.innerHTML = fullName.value + " you got " +  obtainedMarks +
//     " marks out of " +  totalMarks + " and your percentage is " + percentage + "%"

// }

// const head = document.querySelector("#head");

// console.log(head.innerHTML);
// head.innerHTML = "Changed through js"

// const para = document.querySelector("#para");
// para.innerHTML = "lambi krdo"

// function testing(){
//     console.log("testing");

// }

// const input = document.querySelector("#fullname");

// function getinputVal() {
//   console.log(input.value);

//   input.value = "";
// }

// html element ko change krna
// js ka function html element ka click pa call krna
// input ki value ko js ka undar bulana

// const head = document.querySelector("#color");
// head.style.backgroundColor = "red";
// head.style.color = "white";

// function changeColor() {
    
//     if(head.style.backgroundColor === "red") {
//         head.style.backgroundColor = "green";
        
//     } else {
//         head.style.backgroundColor = "red";

//     }
// }




// input banaiga. uska aga aik btn.


const input = document.querySelector("#input");
const h1 = document.querySelector("#result");


function printResult(){
    console.log(input.value);
    h1.innerHTML = input.value
    
}